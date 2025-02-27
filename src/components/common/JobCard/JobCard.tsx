"use client";

import React, { useState } from "react";
import styles from "./JobCard.module.scss";
import Button from "../Button/Button";
import Link from "next/link";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import {
  AttachMoneyOutlined as MoneyIcon,
  FavoriteBorderOutlined as FavoriteIcon,
  WorkOutlineOutlined as WorkIcon,
  CalendarMonthOutlined as CalendarIcon,
} from "@mui/icons-material";
import Modal from "../Modal/Modal";

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

const JobCard: React.FC<JobCardProps> = ({
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
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const handleOpenModal = () => {
    setSelectedJob(jobTitle);
    setSelectedJobId(id);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.iconSection}>
          <p>
            <AccountBalanceIcon />
          </p>
          <p>{id}</p>
        </div>
        <div className={styles.jobInfo}>
          <p>{jobTitle}</p>
          <p>{company}</p>
          <p>{location}</p>
        </div>
        <ul className={styles.jobDetails}>
          <li>
            <span>
              <MoneyIcon color="disabled" />
            </span>{" "}
            {salary}
          </li>
          <li>
            <span>
              <FavoriteIcon color="disabled" />
            </span>{" "}
            {benefits}
          </li>
          <li>
            <span>
              <WorkIcon color="disabled" />
            </span>{" "}
            {schedule}
          </li>
          <li>
            <span>
              <CalendarIcon color="disabled" />
            </span>{" "}
            {workDays}
          </li>
        </ul>
        <hr />
      </div>
      <div className={styles.cardButtons}>
        <Link className={styles.link} href={`/jobs/${slug}`}>
          Ver mais
        </Link>
        <Button onClick={handleOpenModal}>Candidatar-se</Button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          jobTitle={selectedJob}
          jobId={selectedJobId}
        />
      </div>
    </div>
  );
};

export default JobCard;
