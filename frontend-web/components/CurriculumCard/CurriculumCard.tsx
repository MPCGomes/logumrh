import React from 'react'
import styles from './CurriculumCard.module.scss'
import { HiOutlineDotsVertical } from "react-icons/hi";

interface CurriculumCardProps {
  title: string;
  date: string;
  curriculumImage: string;
}

const CurriculumCard: React.FC<CurriculumCardProps> = ({ title, date, curriculumImage }) => {
  return (
    <div 
    className={styles.card}
    style={{ backgroundImage: `url(${curriculumImage})` }}
    >
      <div className={styles.container}>
        <div className={styles.title}>
          <p>{title}</p>
          <button>
            <HiOutlineDotsVertical />
          </button>
        </div>
        <p className={styles.changes}>
          Ultima modificação {date}
        </p>
      </div>

    </div>
  )
}

export default CurriculumCard