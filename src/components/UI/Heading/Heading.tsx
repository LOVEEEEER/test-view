import { FC, PropsWithChildren } from "react";
import style from "./Heading.module.scss";

export const Heading: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className={style.title}>{children}</h1>;
};
