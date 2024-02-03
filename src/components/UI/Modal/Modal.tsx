import { FC, PropsWithChildren } from "react";
import style from "./Modal.module.scss";
import cn from "classnames";

interface IEditProps {
  isActive: boolean;
  setIsActive: (prev: boolean) => void;
}

export const Modal: FC<PropsWithChildren<IEditProps>> = ({
  isActive,
  setIsActive,
  children,
}) => {
  return (
    <div
      className={cn(style.edit, { [style.active]: isActive })}
      onClick={() => setIsActive(false)}
    >
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
