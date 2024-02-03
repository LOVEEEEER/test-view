import { getLocalStorage } from "@/src/utils/local-storage.utils";
import { profileApi } from "@/src/services/UserProfile/profile.api";
import { IUser } from "@/src/shared/interfaces/user.interface";
import { useEffect } from "react";
import { IEditProfile } from "./Edit";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { useSWRConfig } from "swr";
import { IRequestUpdateProfile } from "@/src/services/UserProfile/profileApit.interface";

export const useEdit = (
  setValue: UseFormSetValue<IEditProfile>,
  setIsActiveModal: (prev: boolean) => void,
  user: IUser,
  isActive: boolean
) => {
  useEffect(() => {
    setValue("name", user.name);
    setValue("description", user.description || "");
    setValue("slug", user.slug);
  }, [user, setValue, isActive]);

  const { mutate } = useSWRConfig();

  const onSubmit: SubmitHandler<IEditProfile> = (data) => {
    const body: IRequestUpdateProfile = {
      name: data.name,
      slug: data.slug,
      description: data.description,
      coverId: user.cover?.id || null,
      imageId: user.image?.id || null,
      password: getLocalStorage("password"),
    };
    mutate("profile", profileApi.updateProfile(body));
    setIsActiveModal(false);
  };

  return { onSubmit };
};
