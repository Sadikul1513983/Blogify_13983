import { configureStore } from "@reduxjs/toolkit";
import createRegisterReducer from "../features/createRegister/createRegisterSlice";
import updateAction from "../features/auth/authRegistration";

export const store = configureStore({
  reducer: {
    createRegister: createRegisterReducer,
    updateAction :updateAction
  },
});

