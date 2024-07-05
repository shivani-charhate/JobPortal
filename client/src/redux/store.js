import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./feactures/alertSclice";
import { authSlice } from "./feactures/auth/authSlice";

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    auth: authSlice.reducer,
  },
});
