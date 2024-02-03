import { AuthField } from "@/src/components/shared/AuthField/AuthField";
import { Button } from "@/src/components/UI/Button/Button";
import { LetterIcon, LockIcon } from "@/src/components/UI/Icons/Icons";
import { useAppDispatch } from "@/src/hooks/useAppDispatch";
import { useAppSelector } from "@/src/hooks/useAppSelector";
import { ILogin } from "@/src/shared/interfaces/auth.interface";
import { getRegexEmail } from "@/src/shared/regex/regex";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./FieldsLogin.module.scss";

export const FieldsLogin: FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<ILogin>({ mode: "onChange" });

  const { isLoading } = useAppSelector((state) => state.user);
  const { login } = useAppDispatch();

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    localStorage.setItem("password", JSON.stringify(data.password)); // вот тут мне приходится сохранять пароль, чтобы отправлять запросы на сервер по редактированию профеля
    login({ data, setError });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <AuthField
        icon={<LetterIcon />}
        placeholder="E-mail"
        error={errors.email}
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
        placeholder="Пароль"
        error={errors.password}
        type={"password"}
        {...register("password", {
          required: true,
          minLength: {
            value: 5,
            message: "Пароль должен быть больше 5 символов",
          },
        })}
      />
      <Button disabled={!isValid || isLoading}>Войти</Button>
    </form>
  );
};
