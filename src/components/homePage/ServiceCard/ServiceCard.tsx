import { FC, ReactNode } from "react";
import styles from "./ServiceCard.module.scss";
import CheckIcon from "@mui/icons-material/Check";

interface ServiceCardProps {
  src: string;
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
}

const ServiceCard: FC<ServiceCardProps> = ({
  src,
  title,
  description,
  features,
  icon,
}) => (
  <div className={styles.serviceCard}>
    <div className={styles.image}>
      <img src={src} alt="service-image" />
    </div>
    <div className={styles.cardInfo}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index}>
            <CheckIcon className={styles.checkIcon} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ServiceCard;
