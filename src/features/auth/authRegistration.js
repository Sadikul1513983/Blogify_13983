import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const authenticateUser = createAsyncThunk(
  "authentication/authenticateUser",
  async ({ email, password }) => {
    const response = await axios.post(`http://localhost:3000/auth/login`, {
      "email":email,
      "password":password,
    });
    return response.data;
  }
);

const initialState = {
  isAuthObject: {},
  isLoading: false,
  error: null,
};

export const createAuthentication = createSlice({
  name: "createAuth",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.isAuthObject = action.payload;
        state
        state.isLoading = false;
        state.error = null;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const createAuthenticationActions = createAuthentication.actions;
const updateAction = createAuthentication.reducer
export default updateAction ;
