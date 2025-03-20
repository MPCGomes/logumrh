import { FC } from "react";
import styles from "./FeatureCard.module.scss";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className={styles.featureCard}>
    <div className={styles.icon}>{icon}</div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

export default FeatureCard;
