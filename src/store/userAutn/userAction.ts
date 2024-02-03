import { IUser } from "@/src/shared/interfaces/user.interface";
import { IRegister } from "@/src/shared/interfaces/auth.interface";
import { IResponseLogin } from "../../services/AuthApi/authApi.interface";
import { ILogin } from "../../shared/interfaces/auth.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseFormSetError } from "react-hook-form";
import { authApi } from "@/src/services/AuthApi/auth.api";

export const login = createAsyncThunk<
  IUser,
  { data: ILogin; setError: UseFormSetError<ILogin> }
>("auth/login", async ({ setError, data }, thunkApi) => {
  try {
    const value = await authApi.login(data.email, data.password);
    return value;
  } catch (error) {
    setError("email", {
      type: "custom",
      message: "Неправильный email или пароль",
    });
    setError("password", {
      type: "custom",
      message: "Неправильный email или пароль",
    });
    return thunkApi.rejectWithValue(error);
  }
});

export const register = createAsyncThunk<
  IUser,
  { data: IRegister; setError: UseFormSetError<IRegister> }
>("auth/register", async ({ data, setError }, thunkApi) => {
  try {
    const value = await authApi.register(data.email, data.password, data.name);
    return value;
  } catch (error) {
    setError("email", {
      message: "Уже зарегистрирован",
      type: "custom",
    });
    return thunkApi.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authApi.logout();
});
