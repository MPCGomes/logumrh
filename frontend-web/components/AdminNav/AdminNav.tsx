import React from 'react';
import styles from './AdminNav.module.scss';
import Link from 'next/link';

interface AdminNavProps {
  profileClass: string;
  cvClass: string;
}

const AdminNav: React.FC<AdminNavProps> = ({ profileClass, cvClass }) => {
  return (
    <div className={styles.navbar}>
      <Link
        href={'admin'}
        className=
        {`${styles[profileClass]} 
        ${styles.dashLeft} 
        ${styles.link}`}
      >
        Gerenciar Empresas
      </Link>
      <Link
        href={'adminVacancies'}
        className=
        {`${styles[cvClass]} 
        ${styles.dashRight} 
        ${styles.link}`}
      >
        Gerenciar Vagas
      </Link>
    </div>
  );
};

export default AdminNav;
