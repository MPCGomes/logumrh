'use client';

import React, { useState } from 'react';
import styles from './JobCard.module.scss';
import { HiOutlineShare } from "react-icons/hi";
import { FaBriefcase, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";
import Button from '@mui/material/Button';
import ModalApply from '../ModalApply/ModalApply';

interface JobCardProps {
  id: number;
  job: string;
  company: string;
  payment: string;
  sector: string;
  modality: string;
  workHours: string;
  workSchedule: string;
  location: string;
  requirements: string;
  activities: string;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  job,
  company,
  sector,
  modality,
  workHours,
  payment,
  workSchedule,
  location,
  requirements,
  activities,
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.JobCard}>
      <div className={styles.idGroup}>
        <p>ID {id}</p>
        <button className={styles.share}>
          <HiOutlineShare />
        </button>
      </div>

      <div className={styles.vacancy}>
        <p className={styles.title}>{job}</p>
        <p>{company} • {sector}</p>
      </div>

      <div className={styles.info}>
        <p>
          <span>
            <SiCashapp />
          </span>
          R$ {payment}
        </p>
        <p>
          <span>
            <FaBriefcase />
          </span>
          {modality} • {workHours}
        </p>
        <p>
          <span>
            <FaClock />
          </span>
          {workSchedule}
        </p>
        <p>
          <span>
            <FaLocationDot />
          </span>
          {location}
        </p>
      </div>

      <div className={styles.requirements}>
        <p className={styles.title}>Requisitos</p>
        <p>{requirements}</p>
      </div>

      <div className={styles.activities}>
        <p className={styles.title}>Atividades</p>
        <p>{activities}</p>
      </div>

      <div className={styles.buttons}>
        <Button
          variant="text"
          href="/vacancy"
          className={styles.link}
        >
          Ver mais
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={openModal}
        >
          Candidatar-se
        </Button>
      </div>

      <ModalApply isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default JobCard;
