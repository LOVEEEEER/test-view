import { IImage, IUser } from "@/src/shared/interfaces/user.interface";
import { getAcceptFile } from "@/src/shared/regex/regex";
import Image from "next/image";
import { FC } from "react";
import { PhotoIcon } from "../../UI/Icons/Icons";
import style from "./UserAvatar.module.scss";
import { useUploadFileAvatar } from "./useUploadAvatar";

interface IUserAvatarProps {
  user: IUser;
  isProfile?: boolean;
}

export const UserAvatar: FC<IUserAvatarProps> = ({
  user,
  isProfile = false,
}) => {
  const { onChange } = useUploadFileAvatar(user);
  return (
    <div className={style.avatar}>
      {user.image ? (
        <Image
          src={user.image.url}
          alt={user.name}
          width={100}
          height={100}
          draggable={false}
          priority
          className={style.image}
        />
      ) : (
        <div>{user.name.slice(0, 1)}</div>
      )}
      {isProfile && (
        <div className={style.file}>
          <input
            type={"file"}
            id={"file"}
            accept={getAcceptFile()}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="file">
            <PhotoIcon />
          </label>
        </div>
      )}
    </div>
  );
};
