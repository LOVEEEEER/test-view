import { FC } from "react";
import style from "./FieldsRegister.module.scss";
import { useForm } from "react-hook-form";
import { IRegister } from "@/src/shared/interfaces/auth.interface";
import { SubmitHandler } from "react-hook-form/dist/types";
import { AuthField } from "@/src/components/shared/AuthField/AuthField";
import {
  HumanIcon,
  LetterIcon,
  LockIcon,
} from "@/src/components/UI/Icons/Icons";

import { Button } from "@/src/components/UI/Button/Button";
import { getRegexEmail } from "@/src/shared/regex/regex";
import { useAppSelector } from "@/src/hooks/useAppSelector";
import { useAppDispatch } from "@/src/hooks/useAppDispatch";

export const FieldsRegister: FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<IRegister>({ mode: "onChange" });

  const { isLoading } = useAppSelector((state) => state.user);
  const { register: authRegister } = useAppDispatch();
  const onSubmit: SubmitHandler<IRegister> = (data) => {
    localStorage.setItem("password", JSON.stringify(data.password)); // вот тут мне приходится сохранять пароль, чтобы отправлять запросы на сервер по редактированию провеля
    authRegister({ data, setError });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <AuthField
        icon={<HumanIcon />}
        error={errors.name}
        placeholder="Имя"
        {...register("name", { required: true })}
      />
      <AuthField
        icon={<LetterIcon />}
        error={errors.email}
        placeholder="E-mail"
        {...register("email", {
          required: true,
          pattern: {
            value: getRegexEmail(),
            message: "Введите правильный email",
          },
        })}
      />
      <AuthField
        icon={<LockIcon />}
        error={errors.password}
        type={"password"}
        placeholder="Пароль"
        {...register("password", {
          required: true,
          minLength: {
            value: 5,
            message: "Пароль должен быть больше 5 символов",
          },
        })}
      />
      <Button disabled={!isValid || isLoading}>Создать аккаунт</Button>
    </form>
  );
};
