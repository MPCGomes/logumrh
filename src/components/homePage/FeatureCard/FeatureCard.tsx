import React from "react";
import styles from "./FeatureCard.module.scss";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className={styles.featureCard}>
      <p>
        <PeopleOutlineIcon />
      </p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;