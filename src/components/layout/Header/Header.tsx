import { useAppSelector } from "@/src/hooks/useAppSelector";
import Link from "next/link";
import { FC } from "react";
import { Logo } from "../../UI/Logo/Logo";
import { ButtonHeader } from "./ButtonHeader/ButtonHeader";
import style from "./Header.module.scss";
import { LinkProfile } from "./LinkProfile/LinkProfile";

export const Header: FC = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className={style.header}>
      <div className={style.title}>
        <Logo />
        <div>Разрабатываем и запускаем сложные веб проекты</div>
      </div>
      {user ? <LinkProfile  /> : <ButtonHeader />}
    </div>
  );
};
