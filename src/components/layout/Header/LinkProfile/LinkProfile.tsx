import { UserImage } from "@/src/components/shared/UserImage/UserImage";
import { getProfileUrl } from "@/src/configs/url.config";
import useSwr from "swr";
import Link from "next/link";
import { FC } from "react";
import style from "./LinkProfile.module.scss";
import { profileApi } from "@/src/services/UserProfile/profile.api";
import { IUser } from "@/src/shared/interfaces/user.interface";

export const LinkProfile: FC = () => {
  const { data } = useSwr<IUser>("profile", profileApi.getProfile);

  return (
    <Link href={getProfileUrl()} className={style.link}>
      <div className={style.name}>{data?.name}</div>
      <UserImage image={data?.image || null} name={data?.name || ""} />
    </Link>
  );
};
