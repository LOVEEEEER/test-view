import { FC } from "react";
import { IButtonForm } from "./ButtonForm.interface";
import styles from "./ButtonForm.module.scss";
import cn from "classnames";

const ButtonForm: FC<IButtonForm> = ({ children, look, ...rest }) => {
  return (
    <button
      className={cn(styles.default, {
        [styles.light]: look === "light",
        [styles.dark]: look === "dark",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
