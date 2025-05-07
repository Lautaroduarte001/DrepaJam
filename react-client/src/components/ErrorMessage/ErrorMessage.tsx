// src/components/ErrorMessage/ErrorMessage.tsx
import styles from './ErrorMessage.module.css'

const ErrorMessage = ({ message }: { message: string }) => {
  return <div className={styles.error}>{message}</div>
}

export default ErrorMessage
