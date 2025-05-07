import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import {
  EffectComposer,
  Bloom,
  Noise,
  ChromaticAberration,
  Vignette,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

function SoundWaveParticles() {
  const geo = useRef<THREE.BufferGeometry>(null!)
  const { viewport } = useThree()
  const { width, height } = viewport
  const count = 10000

  // 1) generamos posiciones X/Y una sola vez
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      arr[i3 + 0] = (Math.random() - 0.5) * width
      arr[i3 + 1] = (Math.random() - 0.5) * height
      arr[i3 + 2] = 0
    }
    return arr
  }, [count, width, height])

  // 2) contador para el AnalyserNode
  const [analyser, setAnalyser] = useState<AnalyserNode>()
  const data = useMemo(
    () => (analyser ? new Uint8Array(analyser.frequencyBinCount) : null),
    [analyser]
  )

  // 3) Montamos AudioContext + <audio> invisible
  useEffect(() => {
    // audio en public/tu-cancion.mp3
    const audioEl = new Audio('/back_in_black.mp3')
    audioEl.crossOrigin = 'anonymous'
    audioEl.loop = true
    audioEl.volume = 0.5

    const ctx = new AudioContext()
    const src = ctx.createMediaElementSource(audioEl)
    const analyserNode = ctx.createAnalyser()
    analyserNode.fftSize = 256

    src.connect(analyserNode)
    analyserNode.connect(ctx.destination)
    setAnalyser(analyserNode)

    // al primer click desbloqueamos el autoplay
    const unlock = () => {
      ctx.resume()
      audioEl.play()
      document.removeEventListener('pointerdown', unlock)
    }
    document.addEventListener('pointerdown', unlock)

    return () => {
      audioEl.pause()
      analyserNode.disconnect()
      src.disconnect()
      document.removeEventListener('pointerdown', unlock)
    }
  }, [])

  // 4) animamos las partículas con la frecuencia
  useFrame((state, _delta) => {
    if (!analyser || !data) return
    analyser.getByteFrequencyData(data)

    // calculamos bassAvg y midAvg
    const bassCount = data.length >> 3
    let sumBass = 0
    for (let i = 0; i < bassCount; i++) sumBass += data[i]
    const bassAvg = sumBass / bassCount / 255

    let sumMid = 0
    for (let i = bassCount; i < data.length >> 1; i++) sumMid += data[i]
    const midAvg =
      sumMid / ((data.length >> 1) - bassCount) / 255

    const t = state.clock.getElapsedTime()
    const arr = geo.current.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const x = arr[i3]
      const y = arr[i3 + 1]
      const r = Math.hypot(x, y)

      arr[i3 + 2] =
        Math.sin(r * 3 - t * 4) * (1 + bassAvg * 2) +
        Math.cos(r * 2 + t * 2) * midAvg * 0.5 +
        (Math.random() - 0.5) * 0.02
    }

    geo.current.attributes.position.needsUpdate = true
  })

  return (
    <points>
      <bufferGeometry ref={geo}>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        color="white"
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  )
}

export default function BackgroundParticles() {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 15], fov: 75 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'black',
        zIndex: -1,
      }}
    >
      <SoundWaveParticles />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={0.5}
        />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.2} darkness={1.2} />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.002, 0.002]}
        />
      </EffectComposer>
    </Canvas>
  )
}