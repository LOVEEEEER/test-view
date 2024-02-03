import { profileApi } from "../../../services/UserProfile/profile.api";
import { getLocalStorage } from "@/src/utils/local-storage.utils";
import { IRequestUpdateProfile } from "@/src/services/UserProfile/profileApit.interface";
import { IUser } from "@/src/shared/interfaces/user.interface";
import { fileApi } from "@/src/services/fileApi/file.api";
import { ChangeEvent } from "react";
import { useSWRConfig } from "swr";

export const useUploadFileAvatar = (user: IUser) => {
  const { mutate } = useSWRConfig();
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (!file?.length) return;

    const formData = new FormData();
    formData.append("file", file[0]);
    const image = await mutate("file", fileApi.uploadFile(formData));
    if (!image) return;
    const body: IRequestUpdateProfile = {
      name: user.name,
      coverId: user.cover?.id || null,
      description: user.description || "",
      password: getLocalStorage("password"),
      slug: user.slug,
      imageId: image.id,
    };
    mutate("profile", profileApi.updateProfile(body));
  };

  return { onChange };
};
