import { FieldEdit } from "@/src/components/shared/Edit/FieldEdit/FieldEdit";
import { FieldLinkEdit } from "@/src/components/shared/Edit/FieldLinkEdit/FieldLinkEdit";
import { FieldTextareaEdit } from "@/src/components/shared/Edit/FieldTextareaEdit/FieldTextareaEdit";
import ButtonForm from "@/src/components/UI/ButtonForm/ButtonForm";
import { Heading } from "@/src/components/UI/Heading/Heading";
import { IUser } from "@/src/shared/interfaces/user.interface";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./Edit.module.scss";
import { useEdit } from "./useEdit";

export interface IEditProfile {
  name: string;
  description: string;
  slug: string;
}

interface IEditProps {
  user: IUser;
  isActive: boolean;
  setIsActiveModal: (prev: boolean) => void;
}

export const Edit: FC<IEditProps> = ({ user, setIsActiveModal, isActive }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IEditProfile>();

  const { onSubmit } = useEdit(setValue, setIsActiveModal, user, isActive);

  return (
    <div className={style.edit}>
      <Heading>Редактировать профиль</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.name}>
          <FieldEdit
            placeholder="Имя"
            error={errors.name}
            {...register("name", {
              required: "Это поле должно быть заполнено",
            })}
          />
        </div>
        <div className={style.slug}>
          <FieldLinkEdit
            placeholder="Адрес профиля"
            error={errors.slug}
            {...register("slug", {
              required: "Это поле должно быть заполнено",
            })}
          />
        </div>
        <div className={style.description}>
          <FieldTextareaEdit
            placeholder="Описание"
            error={errors.description}
            {...register("description", {
              required: "Это поле должно быть заполнено",
            })}
          />
        </div>
        <div className={style.buttons}>
          <ButtonForm look="light" onClick={() => setIsActiveModal(false)}>
            Отмена
          </ButtonForm>
          <ButtonForm look="dark">Сохранить</ButtonForm>
        </div>
      </form>
    </div>
  );
};
