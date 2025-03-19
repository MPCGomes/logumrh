import { FC } from "react";
import clsx from "clsx";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  variant?: "center" | "start";
  headingColor?: "darkHeading" | "lightHeading";
  subHeadingColor?: "darkSubHeading" | "lightSubHeading";
  subheading?: string;
  heading?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({
  variant = "center",
  headingColor= "darkHeading",
  subHeadingColor= "darkSubHeading",
  subheading = "",
  heading = "",
}) => (
  <div className={clsx(styles.sectionHeading, styles[variant])}>
    <p className={clsx(styles.subheading, styles[subHeadingColor])}>{subheading}</p>
    <h2 className={clsx(styles.heading, styles[headingColor])}>{heading}</h2>
  </div>
);

export default SectionHeading;
