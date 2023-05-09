import { createSlice } from "@reduxjs/toolkit";
import { setCookie, deleteCookie, getCookie } from "cookies-next";

const initialState = { token: getCookie("token") };

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth_login: (_state, { payload }) => {
      setCookie("token", payload);
    },
    auth_logout: () => {
      deleteCookie("token");
      return initialState;
    },
  },
});

export const { auth_login, auth_logout } = auth.actions;
export default auth.reducer;
