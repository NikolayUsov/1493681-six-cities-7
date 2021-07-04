/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
  loginStatus: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },

  logoutStatus: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },
};

const authorization = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    requiredAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setAuthUserData: (state, action) => {
      state.userInfo = action.payload;
    },
    loginRequest: (state) => {
      state.loginStatus.isLoading = true;
    },
    loginSuccess: (state) => {
      state.loginStatus.isLoading = false;
    },
    loginError: (state) => {
      state.loginStatus.isError = true;
    },
    logoutRequest: (state) => {
      state.logoutStatus.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.logoutStatus.isLoading = false;
    },
    logoutError: (state) => {
      state.logoutStatus.isError = true;
    },
  },
});

export const { requiredAuthorization, setAuthUserData } = authorization.actions;
export default authorization.reducer;
