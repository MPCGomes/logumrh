import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styles from './ProfileField.module.scss';

interface ProfileField {
  label: string;
  value: string;
}

const ProfileField: React.FC<ProfileField> = ({ label, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.label}>
          {label}
        </div>
        <div className={styles.value}>
          {value}
        </div>
      </div>
      <IoIosArrowForward size={24} />
    </div>
  )
}

export default ProfileField;