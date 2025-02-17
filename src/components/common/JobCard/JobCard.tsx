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
  id: React.ReactNode;
  jobTitle: React.ReactNode;
  company: React.ReactNode;
  location: React.ReactNode;
  salary: React.ReactNode;
  benefits: React.ReactNode;
  schedule: React.ReactNode;
  workDays: React.ReactNode;
}

const JobCard: React.FC<JobCardProps> = ({
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
        <Link href={"#"}> Ver mais</Link>
        <Button>Candidatar-se</Button>
      </div>
    </div>
  );
};

export default JobCard;
