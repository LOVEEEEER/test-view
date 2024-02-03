import { IUser } from "@/src/shared/interfaces/user.interface";

export interface IInitialState {
  user: IUser | null;
  isLoading: boolean;
}
