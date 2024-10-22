import React from 'react'
import styles from './ContactCard.module.scss'
import Link from 'next/link';

interface ContactCardProps {
  icon: string;
  title: string;
  contact: string;
  link: string;
}


const ContactCard: React.FC<ContactCardProps> = ({icon, title, contact, link }) => {
  return (
    <div className={styles.contactCard}>
      <Link
        target="_blank"
        href={link}
      >
        <div className={styles.iconContainer}>
          <p className={styles.icon}>{icon}</p>
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.contact}>{contact}</p>
      </Link>

    </div>
  )
}

export default ContactCard