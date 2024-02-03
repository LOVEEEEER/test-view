import { InputHTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps {
  icon: ReactNode;
  placeholder: string;
  error?: FieldError;
}

type TypeHtmlProps = InputHTMLAttributes<HTMLInputElement> & IInputProps;

export interface IAuthField extends TypeHtmlProps {}
