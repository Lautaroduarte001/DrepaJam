// src/components/FormContainer/FormContainer.tsx
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './FormContainer.module.css'

interface Props {
  logo?: string
  title: string
  children: ReactNode
  bottomText: string
  bottomLinkText: string
  bottomLinkTo: string
}

const FormContainer = ({
  logo,
  title,
  children,
  bottomText,
  bottomLinkText,
  bottomLinkTo,
}: Props) => (
  <section className={styles.section}>
    <div className={styles.contenedor}>
      {logo && <img src={logo} alt="logo" className={styles.logo} draggable={false} />}
      <h3 className={styles.title}>{title}</h3>
      {children}
      <div className={styles.bottom}>
        {bottomText}{' '}
        <Link to={bottomLinkTo}>{bottomLinkText}</Link>
      </div>
    </div>
  </section>
)

export default FormContainer