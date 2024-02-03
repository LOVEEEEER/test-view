import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps {
  placeholder: string;
  site?: string;
  error?: FieldError;
}
type TypeHtmlProps = InputHTMLAttributes<HTMLInputElement> & IInputProps;

export interface IFieldLinkEdit extends TypeHtmlProps {}
