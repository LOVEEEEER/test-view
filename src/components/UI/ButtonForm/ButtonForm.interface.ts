import { ButtonHTMLAttributes } from "react";

interface IButtonProps {
  look: "light" | "dark";
}

type TypeHtmlButton = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps;

export interface IButtonForm extends TypeHtmlButton {}
