// src/pages/Register/Register.tsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormContainer from '../../components/FormContainer/FormContainer'
import InputField from '../../components/InputField/InputField'
import Button from '../../components/Button/Button'
import arroba from '/images/arroba.png'
import inputStyles from '../../components/InputField/InputField.module.css'

/** Interfaz para el estado del formulario */
interface RegisterForm {
  username: string
  fullname: string
  email: string
  mobile: string
  password: string
}

const Register: React.FC = () => {
  const [form, setForm] = useState<RegisterForm>({
    username: '',
    fullname: '',
    email: '',
    mobile: '',
    password: '',
  })
  const [msgs, setMsgs] = useState<string[]>([])
  const navigate = useNavigate()

  /** Cambia el valor de cualquier input */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  /** Envía el formulario */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMsgs([])

    try {
      const res = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        // Suponemos que el backend devuelve { errors: string[] }
        setMsgs(data.errors || ['Ocurrió un error inesperado'])
      } else {
        // Registro exitoso, redirijo a login
        navigate('/login')
      }
    } catch (err) {
      console.error(err)
      setMsgs(['No se pudo conectar con el servidor'])
    }
  }

  return (
    <FormContainer
      title="Registrarse"
      bottomText="Ya tengo una cuenta"
      bottomLinkText="Iniciar sesión"
      bottomLinkTo="/login"
    >
      {/* Mensajes de error, si los hay */}
      {msgs.map((m, i) => (
        <div key={i} className="error">
          {m}
        </div>
      ))}

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          label="Crear Nombre de Usuario"
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
          iconLeft={<img src={arroba} alt="@" />}
          iconRight={<i className="fa-solid fa-user"></i>}
          iconLeftClassName={inputStyles.iconLeftPull}
        />
        <InputField
          label="Nombre Real"
          name="fullname"
          type="text"
          value={form.fullname}
          onChange={handleChange}
          iconRight={<i className="fa-solid fa-address-card"></i>}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          iconRight={<i className="fa-regular fa-envelope"></i>}
        />
        <InputField
          label="Número de Celular"
          name="mobile"
          type="tel"
          value={form.mobile}
          onChange={handleChange}
          iconRight={<i className="fa-solid fa-phone"></i>}
        />
        <InputField
          label="Crear Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          iconRight={<i className="fa-solid fa-lock"></i>}
        />

        <Button type="submit">Crear cuenta</Button>
      </form>
    </FormContainer>
  )
}

export default Register