import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: null,
    email: null,
    username: null,
    token: null,
    role: [null],
  },
  reducers: {
    setCredentials: (state, action) => {
      const { username, accessToken } = action.payload;
      const decode = jwtDecode(accessToken);
      const role = decode?.role;
      const id = decode?.id;
      const email = decode?.email;
      state.id = id;
      state.email = email;
      state.username = username;
      state.token = accessToken;
      state.role = role;
    },
    logOut: (state, action) => {
      state.id = null;
      state.email = null;
      state.username = null;
      state.token = null;
      state.role = [null];
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentUserId = (state) => state.auth.id;
export const selectCurrentEmail = (state) => state.auth.email;
export const selectCurrentUsername = (state) => state.auth.username;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentRole = (state) => state.auth.role;
