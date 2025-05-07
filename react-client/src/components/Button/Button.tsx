import styles from './Button.module.css'
import React from 'react';

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    children: React.ReactNode;
  }
  
  const Button: React.FC<ButtonProps> = ({ type = "button", onClick, children, }) => {
    return (
      <button type={type} onClick={onClick} className={styles.button}>
        {children}
      </button>
    );
  };
  
  export default Button;