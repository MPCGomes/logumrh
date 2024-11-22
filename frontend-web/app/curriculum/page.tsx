import React from 'react';
import { FaPlus } from "react-icons/fa6";
import styles from './page.module.scss';
import ProfileNav from '@/components/ProfileNav/ProfileNav';
import CurriculumCard from '@/components/CurriculumCard/CurriculumCard';

const Profile: React.FC = () => {
  return (
    <section className="container paddingSection">
      <div className={styles.sections}>
        <ProfileNav
          profileClass={'inactive'}
          cvClass={'active'}
        />
        <div className={styles.section}>
          <h2>
            Informações Básicas
          </h2>
          <div className={styles.grid}>
            <button className={styles.createCard}>
              <p className={styles.icon}><FaPlus /></p>
              <p className={styles.create}>Adicionar novo  currículo</p>
            </button>
            <CurriculumCard
              title={'Título'}
              date={'01/01/2024'} 
              curriculumImage={'https://cdn-images.livecareer.com.br/pages/curriculum_ou_curriculo_lc_br_cta_2.jpg'}            
              />
              <CurriculumCard
              title={'Título'}
              date={'01/01/2024'} 
              curriculumImage={'https://cdn-images.livecareer.com.br/pages/curriculum_ou_curriculo_lc_br_cta_2.jpg'}            
              />
              <CurriculumCard
              title={'Título'}
              date={'01/01/2024'} 
              curriculumImage={'https://cdn-images.livecareer.com.br/pages/curriculum_ou_curriculo_lc_br_cta_2.jpg'}            
              />
              <CurriculumCard
              title={'Título'}
              date={'01/01/2024'} 
              curriculumImage={'https://cdn-images.livecareer.com.br/pages/curriculum_ou_curriculo_lc_br_cta_2.jpg'}            
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
