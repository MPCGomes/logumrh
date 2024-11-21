import React from 'react';
import ProfileField from '@/components/ProfileField/ProfileField';
import styles from './ProfileSection.module.scss';

interface Field {
  label: string;
  value: string;
}

interface ProfileSectionProps {
  title: string;
  fields: Field[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, fields }) => (
  <div className={styles.section}>
    <h2>
      {title}
    </h2>
    <div>
      {fields.map((field, index) => (
        <ProfileField key={index} label={field.label} value={field.value} />
      ))}
    </div>
  </div>
);

export default ProfileSection;