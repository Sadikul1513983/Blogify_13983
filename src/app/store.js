import { configureStore } from "@reduxjs/toolkit";
import createRegisterReducer from "../features/createRegister/createRegisterSlice";

export const store = configureStore({
  reducer: {
    createRegister: createRegisterReducer,
  },
});
