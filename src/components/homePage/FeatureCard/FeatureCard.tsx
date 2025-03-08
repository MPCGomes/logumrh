import { FC } from "react";
import styles from "./FeatureCard.module.scss";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description }) => (
  <div className={styles.featureCard}>
    <PeopleOutlineIcon className={styles.icon} />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

export default FeatureCard;
