import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerList: {},
  afterRegisterList:{} // Initial state should be an object, not an array
};

export const createRegisterSlice = createSlice({
  name: "createRegister",
  initialState,
  reducers: {
    setRegistration: (state, action) => {
      const payload = action.payload;
      const objRegistration = {
        isRegistration: false,
        personFirstName: payload.personFirstName,
        personLastName: payload.personLastName,
        email: payload.email,
        password: payload.password,
      };
      const updatedList = { ...state.registerList, objRegistration }; 
      state.registerList = updatedList;
    },
    updateAfterRegistration: (state, action) => {
      const payload = action.payload;
      const objRegistration = {
        isRegistration: payload.isRegistration,
      };
      const updatedList = objRegistration; 
      state.afterRegisterList = updatedList;
    },
  },
});

export const setRegistrationAction = createRegisterSlice.actions.setRegistration;
export const afterRegistration = createRegisterSlice.actions.updateAfterRegistration

const createRegisterReducer = createRegisterSlice.reducer;

export default createRegisterReducer;
