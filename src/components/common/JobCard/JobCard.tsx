"use client";

import { FC, useState } from "react";
import styles from "./JobCard.module.scss";
import Button from "../Button/Button";
import Link from "next/link";
import Modal from "../Modal/Modal";
import {
  AccountBalance as BankIcon,
  AttachMoneyOutlined as MoneyIcon,
  FavoriteBorderOutlined as FavoriteIcon,
  WorkOutlineOutlined as WorkIcon,
  CalendarMonthOutlined as CalendarIcon,
} from "@mui/icons-material";

interface JobCardProps {
  slug: string;
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  salary: string;
  benefits: string;
  schedule: string;
  workDays: string;
}

const JobCard: FC<JobCardProps> = ({
  slug,
  id,
  jobTitle,
  company,
  location,
  salary,
  benefits,
  schedule,
  workDays,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen((prev) => !prev);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.iconSection}>
          <BankIcon className={styles.icon} />
          <span className={styles.jobId}>{id}</span>
        </div>
        <div className={styles.jobInfo}>
          <h3>{jobTitle}</h3>
          <p>{company}</p>
          <p>{location}</p>
        </div>

        <ul className={styles.jobDetails}>
          {[
            { icon: <MoneyIcon />, text: salary },
            { icon: <FavoriteIcon />, text: benefits },
            { icon: <WorkIcon />, text: schedule },
            { icon: <CalendarIcon />, text: workDays },
          ].map(({ icon, text }, index) => (
            <li key={index}>
              <span>{icon}</span> {text}
            </li>
          ))}
        </ul>
        <hr />
      </div>

      <div className={styles.cardButtons}>
        <Link className={styles.link} href={`/jobs/${slug}`}>
          Ver mais
        </Link>
        <Button variant="contained" onClick={handleModalToggle}>
          Candidatar-se
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        jobTitle={jobTitle}
        jobId={id}
      />
    </div>
  );
};

export default JobCard;
