import React from "react";
import clsx from "clsx";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  variant?: "center" | "start";
  className?: string;
  children?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  variant = "start",
  className,
  children,
}) => {
  return (
    <div className={clsx(styles.sectionHeading, styles[variant], className)}>
      <p>conheça a</p>
      <h2>logum recursos humanos</h2>
      {children}
    </div>
  );
};

export default SectionHeading;
