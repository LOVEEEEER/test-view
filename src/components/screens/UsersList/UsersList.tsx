import { IUser } from "@/src/shared/interfaces/user.interface";
import { FC } from "react";
import { Meta } from "../../Providers/Meta/Meta";
import { Heading } from "../../UI/Heading/Heading";
import style from "./UsersList.module.scss";
import { UsersListItem } from "./UsersListItem/UsersListItem";

export const UsersList: FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <Meta title="Пользователи">
      <div className={style.screen}>
        <div>
          
          <Heading>Список аккаунтов</Heading>
          <div>
            {users.map((user) => (
              <UsersListItem userProps={user} key={user.email} />
            ))}
          </div>
        </div>
      </div>
    </Meta>
  );
};
