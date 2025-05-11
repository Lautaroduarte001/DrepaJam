// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import BackgroundScene from './components/BackgroundScene/BackgroundScene'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      {/* Fondo animado (Three.js) */}
      <div className="background-canvas">
        <BackgroundScene />
      </div>

      {/* Contenido de la app */}
      <div className="main-content">
        <Routes>
          {/* Redirige "/" a "/login" */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login"    element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />

          {/* Cualquier otra ruta vuelve a "/login" */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App