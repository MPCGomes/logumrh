import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({label, placeholder, type }) => {
  return (
    <div className={styles.input}>
      <label 
      htmlFor="">
        {label}
      </label>
      <input 
      type={type} 
      placeholder={placeholder}/>
    </div>
  )
}

export default Input