import { FC } from "react";
import { Meta } from "../../../Providers/Meta/Meta";
import { Heading } from "../../../UI/Heading/Heading";
import { useAuthRedirect } from "../useAuthRedirect";
import { FieldsRegister } from "./FieldsRegister/FieldsRegister";
import style from "./Register.module.scss";

export const Register: FC = () => {
  useAuthRedirect();
  return (
    <Meta title="Регистрация">
      <div className={style.register_screen}>
        <div className={style.register}>
          <Heading>
            Регистрация <br /> в Yoldi Agency
          </Heading>
          <FieldsRegister />
        </div>
      </div>
    </Meta>
  );
};
