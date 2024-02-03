import { forwardRef } from "react";
import { IFieldLinkEdit } from "./FieldLinkEdit.interface";
import style from "./FieldLinkEdit.module.scss";

export const FieldLinkEdit = forwardRef<HTMLInputElement, IFieldLinkEdit>(
  ({ placeholder, site = "YolDi.com/", error, ...rest }, ref) => {
    return (
      <div className={style.field} >
        <span className={style.placeholder}>{placeholder}</span>
        <div className={style.input}>
          <input ref={ref} {...rest} placeholder={placeholder} />
          <div className={style.site}>{site}</div>
        </div>
        {error?.message && <div className={style.error}>{error.message}</div>}
      </div>
    );
  }
);

FieldLinkEdit.displayName = "FieldLinkEdit";
