'use client'

import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import styles from './page.module.scss';
import ProfileNav from '@/components/ProfileNav/ProfileNav';
import CurriculumCard from '@/components/CurriculumCard/CurriculumCard';
import ProfilePicture from '@/components/ProfilePicture/ProfilePicture';
import ModalAddCv from '@/components/ModalAddCv/ModalAddCv';

const Profile: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="container paddingSection">
      <div className={styles.sections}>
        <ProfilePicture name={"Maria Júlia"} />
        <ProfileNav
          profileClass={'inactive'}
          cvClass={'active'}
        />
        <div className={styles.section}>
          <h2>
            Informações Básicas
          </h2>
          <div className={styles.grid}>
            <button
              className={styles.createCard}
              onClick={openModal}
            >
              <p className={styles.icon}><FaPlus /></p>
              <p className={styles.create}>Adicionar novo  currículo</p>
            </button>
            <CurriculumCard
              title={'Atendimento'}
              date={'25/11/2024'}
              curriculumImage={'https://cdn-images.livecareer.com.br/pages/curriculum_ou_curriculo_lc_br_cta_2.jpg'}
            />
            <CurriculumCard
              title={'Administrativo'}
              date={'10/11/2024'}
              curriculumImage={'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/resume-curriculum-vitae-design-template-cd5136dd58591765d75125a12226d1cd_screen.jpg?ts=1674136405'}
            />
          </div>
        </div>
      </div>
      <ModalAddCv isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Profile;