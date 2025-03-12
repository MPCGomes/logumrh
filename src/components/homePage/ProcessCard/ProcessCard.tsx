import { FC } from "react";
import styles from "./ProcessCard.module.scss";

interface ProcessCardProps {
  icon: string;
  title: string;
  description: string;
}

const ProcessCard: FC<ProcessCardProps> = ({ icon, title, description }) => (
  <div className={styles.processCard}>
    <img src={icon} alt="process-icon" className={styles.icon} />
    <div className={styles.text}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

export default ProcessCard;
