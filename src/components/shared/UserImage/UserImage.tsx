import { IImage } from "@/src/shared/interfaces/user.interface";
import Image from "next/image";
import { FC } from "react";
import style from "./UserImage.module.scss";

interface IUserImageProps {
  name: string;
  image: IImage | null;
}

export const UserImage: FC<IUserImageProps> = ({ image, name }) => {
  return (
    <div className={style.user_image}>
      {image ? (
        <Image
          src={image.url}
          alt={name}
          width={50}
          height={50}
          draggable={false}
          priority
          className={style.image}
        />
      ) : (
        <div>{name.slice(0, 1)}</div>
      )}
    </div>
  );
};
