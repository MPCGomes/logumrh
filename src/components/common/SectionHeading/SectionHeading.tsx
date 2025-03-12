import { FC } from "react";
import clsx from "clsx";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  variant?: "center" | "start";
  subheading?: string;
  heading?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({
  variant = "center",
  subheading = "",
  heading = "",
}) => (
  <div className={clsx(styles.sectionHeading, styles[variant])}>
    <p className={styles.subheading}>{subheading}</p>
    <h2 className={styles.heading}>{heading}</h2>
  </div>
);

export default SectionHeading;
