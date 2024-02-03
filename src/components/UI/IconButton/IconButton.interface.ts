import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps {
  icon: ReactNode;
}

type IButtonHTML = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps;

export interface IIconButtonProps extends IButtonHTML {}
