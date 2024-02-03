import { getAuthUrl } from "@/src/configs/url.config";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import style from "./Layout.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { asPath } = useRouter();
  const isAuth =
    asPath === getAuthUrl("login") || asPath === getAuthUrl("register");
  return (
    <div className={style.layout}>
      <Header />
      {children}
      {isAuth && <Footer />}
    </div>
  );
};
