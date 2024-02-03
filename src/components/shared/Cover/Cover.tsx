import { IUser } from "@/src/shared/interfaces/user.interface";
import { getAcceptFile } from "@/src/shared/regex/regex";
import { FC } from "react";
import { ArrowIcon, ImageIcon, TrashIcon } from "../../UI/Icons/Icons";
import ButtonUpload from "./ButtonUpload/ButtonUpload";
import style from "./Cover.module.scss";
import { useUpdateCover } from "./useUpdateCover";

interface ICoverProps {
  user: IUser;
  isProfile?: boolean;
}

export const Cover: FC<ICoverProps> = ({ user, isProfile = false }) => {
  const { onChange, removeCover } = useUpdateCover(user);
  return (
    <div className={style.cover}>
      {user.cover ? (
        <img src={user.cover.url} alt="" draggable={false} />
      ) : (
        <div className={style.fill} />
      )}
      {isProfile && (
        <div className={style.upload}>
          {user.cover ? (
            <ButtonUpload
              iconLeft={<TrashIcon />}
              iconRight={<ImageIcon />}
              onClick={removeCover}
            >
              Удалить
            </ButtonUpload>
          ) : (
            <div className={style.input}>
              <input
                type={"file"}
                id="cover"
                accept={getAcceptFile()}
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="cover">
                <ButtonUpload
                  iconLeft={<ArrowIcon />}
                  iconRight={<ImageIcon />}
                >
                  Загрузить
                </ButtonUpload>
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
