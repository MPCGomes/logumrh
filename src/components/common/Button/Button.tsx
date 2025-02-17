import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "contained";
}

const Button: React.FC<ButtonProps> = ({
  variant = "outlined",
  className,
  children,
  ...props
}) => {
  return (
    <button className={clsx(styles.button, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
