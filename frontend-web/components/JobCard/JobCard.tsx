'use client'

import React, { useState } from 'react'
import styles from './JobCard.module.scss'
import { HiOutlineShare } from "react-icons/hi";
import { FaBriefcase, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import Link from 'next/link';
import Modal from '../ModalApply/ModalApply'

interface JobCardProps {
  id: number;
  vacancy: string;
  firm: string;
  salary: number;
  sector: string;
  modality: string;
  period: string;
  scale: string;
  location: string;
  requirements: string;
  activities: string;
}

const JobCard: React.FC<JobCardProps> = ({ id, vacancy, firm, sector, modality, period, salary, scale, location, requirements, activities }) => {
  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.JobCard}>
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
            <SiCashapp />
          </span>
          R$
          {salary}
        </p>
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
      <div className={styles.buttons}>
        <Link
          className={styles.link}
          href={'vacancy'}
        >
          Ver mais
        </Link>
        <p onClick={openModal}>
          <ButtonPrimary
            text='Candidatar-se'
          />
        </p>

      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
      </Modal>
    </div>
  )
}

export default JobCard;