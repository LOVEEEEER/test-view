import { FC } from "react";
import { IIconButtonProps } from "./IconButton.interface";
import style from "./IconButton.module.scss";

export const IconButton: FC<IIconButtonProps> = ({
  children,
  icon,
  ...rest
}) => {
  return (
    <button className={style.button} {...rest}>
      <div className={style.icon}>{icon}</div>
      <span>{children} </span>
    </button>
  );
};
