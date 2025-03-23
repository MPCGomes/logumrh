"use client";

import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "contained" | "contained-white";
  icon?: ReactNode;
  href?: string;
}

const Button: FC<ButtonProps> = ({
  variant = "outlined",
  className,
  icon,
  children,
  href,
  ...props
}) => {
  const classes = clsx(styles.button, styles[variant], className);

  return href ? (
    <Link href={href} className={classes}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
