import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "Auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
