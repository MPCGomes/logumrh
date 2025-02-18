import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "contained";
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "outlined",
  className,
  icon,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
