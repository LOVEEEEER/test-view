import { profileApi } from "../UserProfile/profile.api";
import {
  removeTokenCookie,
  saveTokenCookie,
  saveToLocalStorage,
} from "./auth-helper.api";
import { IResponseLogin } from "./authApi.interface";
import { classicAxios } from "../axios/axios";

export const authApi = {
  async login(email: string, password: string) {
    const value = await classicAxios
      .post<IResponseLogin>("auth/login", {
        email,
        password,
      })
      .then((data) => data.data);
    if (value) saveTokenCookie(value.value);
    const user = await profileApi.getProfile();
    if (user) saveToLocalStorage(user);

    return user;
  },

  async register(email: string, password: string, name: string) {
    const value = await classicAxios
      .post<IResponseLogin>("auth/sign-up", {
        email,
        password,
        name,
      })
      .then((data) => data.data);
    if (value) saveTokenCookie(value.value);
    const user = await profileApi.getProfile().then((data) => data);
    if (value) saveToLocalStorage(user);
    return user;
  },

  logout() {
    removeTokenCookie();
    localStorage.removeItem("user");
    localStorage.removeItem("password");
  },
};
