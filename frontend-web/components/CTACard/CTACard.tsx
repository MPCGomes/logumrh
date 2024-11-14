import React from 'react'
import styles from './CTACard.module.scss'

interface ButtonSecondaryProps {
  title: string;
  description: string;
  link: string;
  button: string;
  background: string;
  color: string;
}

const CTACard: React.FC<ButtonSecondaryProps> = ({ title, description, link, button, background, color }) => {
  return (
    <div
      style={{
        background: background
      }}
      className={styles.card}
    >
      <p className={styles.title}>
        {title}
      </p>
      <p className={styles.description}>
        {description}
      </p>
      <a href={link}>
        <button
          style={{
            color: color
          }}
          className={styles.btn}
        >
          {button}
        </button>
      </a>
    </div>
  )
}

export default CTACard