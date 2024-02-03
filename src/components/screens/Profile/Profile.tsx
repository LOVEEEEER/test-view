import { useAppSelector } from "@/src/hooks/useAppSelector";
import { FC, useState } from "react";

import style from "./Profile.module.scss";
import useSwr from "swr";
import { profileApi } from "@/src/services/UserProfile/profile.api";
import { Loader } from "../../shared/Loader/Loader";
import { Cover } from "../../shared/Cover/Cover";
import { Meta } from "../../Providers/Meta/Meta";
import { UserAvatar } from "../../shared/UserAvatar/UserAvatar";
import { HeadingUser } from "../UserPage/HeadingUser/HeadingUser";
import { useRouter } from "next/router";
import { getAuthUrl } from "@/src/configs/url.config";
import { IconButton } from "../../UI/IconButton/IconButton";
import { ExitIcon } from "../../UI/Icons/Icons";
import { useAppDispatch } from "@/src/hooks/useAppDispatch";
import { Modal } from "../../UI/Modal/Modal";
import { Edit } from "./Edit/Edit";

export const Profile: FC = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data } = useSwr("profile", profileApi.getProfile);
  const { push } = useRouter();
  const onClick = () => {
    logout();
  };
  const [isActiveModal, setIsActiveModal] = useState(false);
  const { logout } = useAppDispatch();
  if (!user) push(getAuthUrl("login"));
  return (
    <Meta title="Мой профиль">
      <div className={style.screen}>
        {data ? (
          <div className={style.profile}>
            <Cover user={data} isProfile />
            <div className={style.avatar}>
              <UserAvatar user={data} isProfile />
            </div>
            <div className={style.body}>
              <HeadingUser
                user={data}
                isProfile
                setIsActive={setIsActiveModal}
              />
              {data.description && <span>{data.description}</span>}

              <IconButton icon={<ExitIcon />} onClick={() => onClick()}>
                Выйти
              </IconButton>
              <Modal isActive={isActiveModal} setIsActive={setIsActiveModal}>
                <Edit
                  user={data}
                  setIsActiveModal={setIsActiveModal}
                  isActive={isActiveModal}
                />
              </Modal>
            </div>
          </div>
        ) : (
          <div className={style.loading}>
            <Loader />
          </div>
        )}
      </div>
    </Meta>
  );
};
