import { getAuthUrl } from "@/src/configs/url.config";
import Link from "next/link";
import { FC } from "react";
import style from "./LinkRegister.module.scss";

export const LinkRegister: FC = () => {
  return (
    <div className={style.link_register}>
      <span>Еще нет аккаунта?</span>
      <Link href={getAuthUrl("register")} className={style.link}>
        {" "}
        Зарегистрироваться
      </Link>
    </div>
  );
};
