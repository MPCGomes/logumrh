import React from "react";
import styles from "./ServiceCard.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import { ReactNode } from "react";

interface ServiceCardProps {
  src: string;
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  src,
  title,
  description,
  features,
  icon,
}) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.image}>
        <img src={src} alt="process-image" />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.icon}>
          <p>{icon}</p>
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
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
