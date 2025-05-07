// src/components/InputField/InputField.tsx
import React from 'react'
import styles from './InputField.module.css'

export interface InputFieldProps {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  iconLeftClassName?: string
  iconRightClassName?: string
}

const InputField: React.FC<InputFieldProps> = ({
  label, type, name, value, onChange,
  iconLeft, iconRight, iconLeftClassName, iconRightClassName,
}) => (
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