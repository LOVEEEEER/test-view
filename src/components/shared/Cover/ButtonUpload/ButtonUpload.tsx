import { FC, PropsWithChildren, ReactNode } from "react";
import style from "./ButtonUpload.module.scss";

interface IButtonUploadProps {
  iconLeft: ReactNode;
  iconRight: ReactNode;
  onClick?: () => void;
}

const ButtonUpload: FC<PropsWithChildren<IButtonUploadProps>> = ({
  iconLeft,
  iconRight,
  onClick = () => {},
  children,
}) => {
  return (
    <div className={style.button} onClick={() => onClick()}>
      <div className={style.left}>{iconLeft}</div>
      <div className={style.text}>{children}</div>
      <div className={style.right}> {iconRight}</div>
    </div>
  );
};

export default ButtonUpload;
