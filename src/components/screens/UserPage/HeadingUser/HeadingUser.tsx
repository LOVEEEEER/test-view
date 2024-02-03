import { IconButton } from "@/src/components/UI/IconButton/IconButton";
import { PencilIcon } from "@/src/components/UI/Icons/Icons";
import { IUser } from "@/src/shared/interfaces/user.interface";
import { FC } from "react";
import style from "./HeadingUser.module.scss";

interface IHeadingUserProps {
  user: IUser;
  setIsActive?: (prev: boolean) => void;
  isProfile?: boolean;
}

export const HeadingUser: FC<IHeadingUserProps> = ({
  user,
  setIsActive = () => {},
  isProfile = false,
}) => {
  return (
    <div className={style.heading_user}>
      <div className={style.contacts}>
        <div className={style.name}>{user.name}</div>
        <div className={style.email}>{user.email}</div>
      </div>
      {isProfile && (
        <IconButton icon={<PencilIcon />} onClick={() => setIsActive(true)}>
          Редактировать
        </IconButton>
      )}
    </div>
  );
};
