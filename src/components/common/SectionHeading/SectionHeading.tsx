import React from "react";
import clsx from "clsx";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  variant?: "center" | "start";
  className?: string;
  subheading?: string;
  heading?: string;
  children?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  variant = "start",
  className,
  subheading,
  heading,
  children,
}) => {
  return (
    <div className={clsx(styles.sectionHeading, styles[variant], className)}>
      {subheading && <p className={styles.subheading}>{subheading}</p>}
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      {children}
    </div>
  );
};

export default SectionHeading;
