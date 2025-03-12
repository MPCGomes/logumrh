import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "contained";
  icon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "outlined",
  className,
  icon,
  children,
  ...props
}) => (
  <button
    className={clsx(styles.button, styles[variant], className)}
    {...props}
  >
    {icon && <span className={styles.icon}>{icon}</span>}
    {children}
  </button>
);

export default Button;
