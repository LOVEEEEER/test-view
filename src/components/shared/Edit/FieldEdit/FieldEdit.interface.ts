import { InputHTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps {
  placeholder: string;
  error?: FieldError;
}

type TypeHtmlProps = InputHTMLAttributes<HTMLInputElement> & IInputProps;

export interface IEditField extends TypeHtmlProps {}
