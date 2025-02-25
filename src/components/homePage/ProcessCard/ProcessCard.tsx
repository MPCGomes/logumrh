import React from "react";
import styles from "./ProcessCard.module.scss";

interface ProcessCardProps {
  icon: string;
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.processCard}>
      <img src={icon} alt="process-icon" />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
