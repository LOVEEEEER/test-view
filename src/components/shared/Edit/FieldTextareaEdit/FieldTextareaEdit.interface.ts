import { TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps {
  placeholder: string;
  error?: FieldError;
}
type TypeHtmlProps = TextareaHTMLAttributes<HTMLTextAreaElement> & IInputProps;

export interface IFieldTextareaEdit extends TypeHtmlProps {}
