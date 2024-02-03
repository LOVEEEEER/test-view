import { FC } from "react";
import { IButton } from "./Button.interface";
import style from "./Button.module.scss";

export const Button: FC<IButton> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={style.button}>
      {children}
    </button>
  );
};
