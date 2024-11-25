import React from 'react'
import styles from './ServiceCard.module.scss'

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {icon}
      </div>
      <div className={styles.text}>
        <p className={styles.title}>
          {title}
        </p>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard