// src/components/InputField/InputField.tsx
import { ReactNode } from 'react'
import styles from './InputField.module.css'

export interface InputFieldProps {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  iconLeft?: ReactNode
  iconRight?: ReactNode
  iconLeftClassName?: string
  iconRightClassName?: string
}

const InputField = ({
  label, type, name, value, onChange,
  iconLeft, iconRight, iconLeftClassName, iconRightClassName,
}: InputFieldProps) => (
  <div className={styles.container}>
    {iconLeft && (
      <span className={`${styles.iconLeft} ${iconLeftClassName||''}`}>
        {iconLeft}
      </span>
    )}
    <input
      id={name}
      className={styles.input}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "        /* activa el floating-label */
      autoComplete="off"
      required
    />
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    {iconRight && (
      <span className={`${styles.iconRight} ${iconRightClassName||''}`}>
        {iconRight}
      </span>
    )}
  </div>
)

export default InputField