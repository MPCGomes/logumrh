import React from "react";
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
              <MoneyIcon color="primary" />
            </span>{" "}
            {salary}
          </li>
          <li>
            <span>
              <FavoriteIcon color="primary" />
            </span>{" "}
            {benefits}
          </li>
          <li>
            <span>
              <WorkIcon color="primary" />
            </span>{" "}
            {schedule}
          </li>
          <li>
            <span>
              <CalendarIcon color="primary" />
            </span>{" "}
            {workDays}
          </li>
        </ul>
        <hr />
      </div>
      <div className={styles.cardButtons}>
        <Link href={`/jobs/${slug}`}>Ver Mais</Link>
        <Button>Candidatar-se</Button>
      </div>
    </div>
  );
};

export default JobCard;
