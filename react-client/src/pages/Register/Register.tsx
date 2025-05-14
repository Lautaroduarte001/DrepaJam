// src/pages/Register/Register.tsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormContainer from '../../components/FormContainer/FormContainer'
import InputField from '../../components/InputField/InputField'
import Button from '../../components/Button/Button'
import arroba from '/images/arroba.png'
import inputStyles from '../../components/InputField/InputField.module.css'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

/** Interfaz para el estado del formulario */
interface RegisterForm {
  username: string
  fullName: string
  email: string
  phoneNumber: string
  password: string
}

const Register = () => {
  const [form, setForm] = useState<RegisterForm>({
    username: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  })
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  /** Cambia el valor de cualquier input */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  /** Envía el formulario */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    try {
      const res = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        // Suponemos que el backend devuelve { errors: string[] }
        setError(data.errors || ['Ocurrió un error inesperado'])
      } else {
        // Registro exitoso, redirijo a login
        navigate('/login')
      }
    } catch (err) {
      console.error(err)
      setError('No se pudo conectar con el servidor')
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

      {error && <ErrorMessage message={error} />}


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
          name="fullName"
          type="text"
          value={form.fullName}
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
          name="phoneNumber"
          type="tel"
          value={form.phoneNumber}
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