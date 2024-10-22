import React from 'react'
import styles from './ButtonPrimary.module.scss'

interface ButtonPrimaryProps {
  text: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text }) => {
  return (
    <button className={styles.btnPrimary}>
      {text}
    </button>
  )
}

export default ButtonPrimary