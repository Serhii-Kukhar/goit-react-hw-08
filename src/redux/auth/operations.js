import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import toast from "react-hot-toast";

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post("/users/signup", body);
      setAuthHeader(response.data.token);
      toast.success("Ви успішно зареєструвались!");
      return response.data;
    } catch (error) {
      toast.error("Помилка реєстрації!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post("/users/login", body);
      setAuthHeader(response.data.token);
      toast.success(`Вітаємо, ${response.data.user.name}!`);

      return response.data;
    } catch (error) {
      toast.error("Неправильно введено Email або Пароль");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await goitAPI.post("/users/logout");
      removeAuthHeader();
    } catch (error) {
      toast.error("Помилка виходу.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;
      if (!savedToken) {
        return thunkAPI.rejectWithValue("Token is not exist!");
      }

      setAuthHeader(savedToken);

      const response = await goitAPI.get("users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
