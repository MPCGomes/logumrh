import React from "react";
import styles from "./ServiceCard.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

interface ServiceCardProps {
  src: string;
  title: string;
  description: string;
  features: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  src,
  title,
  description,
  features,
}) => {
  return (
    <div className={styles.serviceCard}>
      <img src={src} alt="error" />
      <div className={styles.cardInfo}>
        <div className={styles.icon}>
          <p>
            <PeopleOutlineIcon sx={{ fontSize: 50 }} />
          </p>
        </div>
        <p>{title}</p>
        <p>{description}</p>
        <ul className={styles.features}>
          <li>
            <span>
              <CheckIcon sx={{ fontSize: 20 }} />
            </span>
            {features}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
