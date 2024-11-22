import React from 'react';
import { IoCamera } from 'react-icons/io5';
import styles from './ProfilePicture.module.scss';

interface ProfilePictureProps {
  name: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ name }) => (
  <div className={styles.container}>
    <div className={styles.profile}>
      <div className={styles.imageContainer}>
        <img
          src="/Talento-Julia-Anquier.png"
          alt="Foto de perfil"
          className={styles.image}
        />
        <button className={styles.cameraButton}>
          <IoCamera size={18} />
        </button>
      </div>
    </div>
    <h1 className={styles.welcomeText}>
      Bem-vindo(a), {name}
    </h1>
  </div>
);

export default ProfilePicture;
