import React from 'react'
import styles from './VacancyCard.module.scss'
import { HiOutlineShare } from "react-icons/hi";
import { FaBriefcase, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import classNames from 'classnames';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

interface VacancyCardProps {
  id: number;
  vacancy: string;
  firm: string;
  sector: string;
  modality: string;
  period: string;
  scale: string;
  location: string;
  requirements: string;
  activities: string;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ id, vacancy, firm, sector, modality, period, scale, location, requirements, activities }) => {
  return (
    <div className={styles.vacancyCard}>
      <div className={styles.idGroup}>
        <p>
          ID {id}
        </p>
        <button className={styles.share}>
          <HiOutlineShare />
        </button>
      </div>

      <div className={styles.vacancy}>
        <p className={styles.title}>{vacancy}</p>
        <p>{firm} • {sector}</p>
      </div>

      <div className={styles.info}>
        <p>
          <span>
            <FaBriefcase />
          </span>
          {modality} • {period}
        </p>
        <p>
          <span>
            <FaClock />
          </span>
          {scale}
        </p>
        <p>
          <span>
            <FaLocationDot />
          </span>
          {location}
        </p>
      </div>

      <div className={styles.requirements}>
        <p className={styles.title}>
          Requisitos
        </p>
        <p>{requirements}</p>
      </div>

      <div className={styles.activities}>
        <p className={styles.title}>
          Atividades
        </p>
        <p>{activities}</p>
      </div>

      <ButtonSecondary text='VER DETALHES'/>
      <ButtonPrimary text='APLICAR'/>

    </div>
  )
}

export default VacancyCard