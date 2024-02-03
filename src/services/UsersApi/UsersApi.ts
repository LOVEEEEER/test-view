import { IUser } from "@/src/shared/interfaces/user.interface";
import { classicAxios } from "../axios/axios";

export const UsersApi = {
  async getUsers() {
    return await classicAxios.get<IUser[]>("user").then((data) => data.data);
  },

  async getUser(slug: string) {
    return await classicAxios
      .get<IUser>(`user/${slug}`)
      .then((data) => data.data);
  },
};
