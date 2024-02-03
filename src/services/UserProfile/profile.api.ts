import { IRequestUpdateProfile } from "./profileApit.interface";
import { IUser } from "@/src/shared/interfaces/user.interface";
import Cookies from "js-cookie";
import { classicAxios, getKeyHeaders } from "../axios/axios";

export const profileApi = {
  async getProfile() {
    const key: string = String(Cookies.get("key"));
    return await classicAxios
      .get<IUser>("profile", {
        headers: getKeyHeaders(key),
      })
      .then((data) => data.data);
  },

  async updateProfile(data: IRequestUpdateProfile) {
    const key: string = String(Cookies.get("key"));
    return await classicAxios
      .patch<IUser>("profile", { ...data }, { headers: getKeyHeaders(key) })
      .then((data) => data.data);
  },
};
