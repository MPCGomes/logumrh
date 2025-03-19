import { FC } from "react";
import styles from "./ProcessCard.module.scss";
import Image from "next/image";

interface ProcessCardProps {
  icon: string;
  title: string;
  description: string;
}

const ProcessCard: FC<ProcessCardProps> = ({ icon, title, description }) => (
  <div className={styles.processCard}>
    <Image src={icon} alt="process-icon" width={75} height={75} />
    <div className={styles.text}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

export default ProcessCard;
