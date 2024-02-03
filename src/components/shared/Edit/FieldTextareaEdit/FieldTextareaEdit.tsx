import { forwardRef } from "react";
import { IFieldTextareaEdit } from "./FieldTextareaEdit.interface";
import style from "./FieldTextareaEdit.module.scss";

export const FieldTextareaEdit = forwardRef<
  HTMLTextAreaElement,
  IFieldTextareaEdit
>(({ placeholder, error, ...rest }, ref) => {
  return (
    <div className={style.field}>
      <span>{placeholder}</span>
      <textarea placeholder={placeholder} ref={ref} {...rest} />
      {error?.message && <div className={style.error}>{error.message}</div>}
    </div>
  );
});

FieldTextareaEdit.displayName = "FieldTextareaEdit ";
