import { FC, forwardRef } from "react";
import { IEditField } from "./FieldEdit.interface";
import style from "./FieldEdit.module.scss";

export const FieldEdit = forwardRef<HTMLInputElement, IEditField>(
  ({ placeholder, error, ...rest }, ref) => {
    return (
      <div className={style.field}>
        <span>{placeholder}</span>
        <input ref={ref} placeholder={placeholder} {...rest} />
        {error?.message && <div className={style.error}>{error.message}</div>}
      </div>
    );
  }
);

FieldEdit.displayName = "FieldEdit";
