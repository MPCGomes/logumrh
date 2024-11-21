import React from 'react';
import styles from './ProfileNav.module.scss';
import Link from 'next/link';

interface ProfileNavProps {
  profileClass: string;
  cvClass: string;
}

const ProfileNav: React.FC<ProfileNavProps> = ({ profileClass, cvClass }) => {
  return (
    <div className={styles.navbar}>
      <Link
        href={'profile'}
        className=
        {`${styles[profileClass]} 
        ${styles.dashLeft} 
        ${styles.link}`}
      >
        Cadastro
      </Link>
      <Link
        href={'curriculum'}
        className=
        {`${styles[cvClass]} 
        ${styles.dashRight} 
        ${styles.link}`}
      >
        Currículos
      </Link>
    </div>
  );
};

export default ProfileNav;
