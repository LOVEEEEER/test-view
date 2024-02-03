import { FC, forwardRef, useState } from "react";
import { IAuthField } from "./AuthField.interface";
import style from "./AuthField.module.scss";
import { ReactComponent as Eye } from "./eye.svg";

export const AuthField = forwardRef<HTMLInputElement, IAuthField>(
  ({ icon, placeholder, error, type = "text", ...rest }, ref) => {
    const [isPassword, setIsPassword] = useState(type === "password");

    return (
      <div className={style.auth_field}>
        <div className={style.icon}>{icon}</div>
        <input
          {...rest}
          placeholder={placeholder}
          type={isPassword ? "password" : "text"}
          ref={ref}
          className={style.field}
          required={true}
          style={
            type === "password" ? { paddingRight: 55 } : { paddingRight: 20 }
          }
        />
        {type === "password" && (
          <Eye
            onClick={() => setIsPassword((prev) => !prev)}
            className={style.eye}
          />
        )}
        {error?.message && <div className={style.error}>{error.message}</div>}
      </div>
    );
  }
);

AuthField.displayName = "AuthField";
