import React from 'react'
import styles from './ButtonSecondary.module.scss'

interface ButtonSecondaryProps {
  text: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ text }) => {
  return (
    <button className={styles.btnSecondary}>
      {text}
    </button>
  )
}

export default ButtonSecondary