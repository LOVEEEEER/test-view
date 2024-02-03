import { IUser } from "@/src/shared/interfaces/user.interface";
import Cookies from "js-cookie";

export const saveTokenCookie = (value: string) => {
  Cookies.set("key", value);
};

export const removeTokenCookie = () => {
  Cookies.remove("key");
};

export const saveToLocalStorage = (user: IUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};
