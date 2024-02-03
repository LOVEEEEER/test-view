import { IImage } from "@/src/shared/interfaces/user.interface";
import { classicAxios } from "../axios/axios";

export const fileApi = {
  async uploadFile(file: FormData) {
    return await classicAxios
      .post<IImage>("image", file, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((data) => data.data);
  },
};
