import React from "react";
import styles from "./ServiceCard.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

interface ServiceCardProps {
  src: string;
  title: string;
  description: string;
  features: string[]; // Agora é um array de strings
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
            <PeopleOutlineIcon sx={{ fontSize: 45 }} />
          </p>
        </div>
        <p>{title}</p>
        <p>{description}</p>
        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index}>
              <span>
                <CheckIcon sx={{ fontSize: 20 }} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
