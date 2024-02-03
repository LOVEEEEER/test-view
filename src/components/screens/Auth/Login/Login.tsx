import { FC } from "react";
import { Meta } from "../../../Providers/Meta/Meta";
import { Heading } from "../../../UI/Heading/Heading";
import { useAuthRedirect } from "../useAuthRedirect";
import { FieldsLogin } from "./FieldsLogin/FieldsLogin";
import style from "./Login.module.scss";

export const Login: FC = () => {
  useAuthRedirect();
  return (
    <Meta title="Вход">
      <div className={style.login_screen}>
        <div className={style.login}>
          <Heading>Вход в Yoldi Agency</Heading>
          <FieldsLogin />
        </div>
      </div>
    </Meta>
  );
};
