import { UserImage } from "@/src/components/shared/UserImage/UserImage";
import { getProfileUrl, getUserUrl } from "@/src/configs/url.config";
import { useAppSelector } from "@/src/hooks/useAppSelector";
import { IUser } from "@/src/shared/interfaces/user.interface";
import Link from "next/link";

import { FC } from "react";
import style from "./UserListItem.module.scss";

export const UsersListItem: FC<{ userProps: IUser }> = ({ userProps }) => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <Link
      href={
        user?.email === userProps.email
          ? getProfileUrl()
          : getUserUrl(userProps.slug)
      }
      className={style.item}
    >
      <UserImage image={userProps.image} name={userProps.name} />
      <div className={style.contacts}>
        <div className={style.name}>{userProps.name}</div>
        <div className={style.email}>{userProps.email}</div>
      </div>
    </Link>
  );
};
