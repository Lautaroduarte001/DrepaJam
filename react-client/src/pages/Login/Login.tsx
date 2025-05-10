// src/pages/Login/Login.tsx
import { useState,ChangeEvent,FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormContainer from '../../components/FormContainer/FormContainer'
import InputField from '../../components/InputField/InputField'
import Button from '../../components/Button/Button'
import logo from '/images/logo.png'
import arroba from '/images/arroba.png'
import inputStyles from '../../components/InputField/InputField.module.css'
import loginStyles from './Login.module.css'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

interface LoginForm {
  usuario: string
  password: string
}

const Login = () => {
  const [form, setForm] = useState<LoginForm>({ usuario: '', password: '' })
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  // 1) handler para inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  // 2) handler para el submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || 'Credenciales inválidas')
      } else {
        navigate('/')
      }
    } catch (err) {
      console.error(err)
      setError('Error de conexión')
    }
  }

  return (
    <FormContainer
      logo={logo}
      title="Iniciar Sesión"
      bottomText="¿No tenés cuenta?"
      bottomLinkText="Registrate"
      bottomLinkTo="/register"
    >
      {error && <ErrorMessage message={error} />}


      <form onSubmit={handleSubmit} noValidate>
        <InputField
          label="Usuario"
          name="usuario"
          type="text"
          value={form.usuario}
          onChange={handleChange}
          iconLeft={<img src={arroba} alt="@" />}
          iconLeftClassName={inputStyles.iconLeftPull}
        />

        <InputField
          label="Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <div className={loginStyles.olvidar}>
          <Link to="/reset-password">¿Olvidaste tu contraseña?</Link>
        </div>

        <Button type="submit">Iniciar sesión</Button>
      </form>
    </FormContainer>
  )
}

export default Login