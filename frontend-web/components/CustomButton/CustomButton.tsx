"use client";

import Button, { ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;
