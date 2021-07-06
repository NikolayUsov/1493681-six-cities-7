/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AppRoutes, AuthorizationStatus } from '../../../../const';
import { redirectToBack, redirectToRoute } from '../../../middlewars/redirect';

const ApiRoutes = {
  HOSTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  NEARBY: '/nearby',
  COMMENTS: '/comments',
};

export const fetchLogin = createAsyncThunk('user/login',
  async (loginData, ThunkApi) => {
    const { dispatch, extra } = ThunkApi;
    const apiInstance = extra;
    try {
      const { data } = await apiInstance.post(ApiRoutes.LOGIN, loginData);
      localStorage.setItem('token', data.token);
      dispatch(redirectToBack());
      return data;
    } catch (err) {
      throw new Error(err);
    }
  });

export const fetchLogout = createAsyncThunk('user/logout',
  async (_, ThunkApi) => {
    const { dispatch, extra } = ThunkApi;
    const apiInstance = extra;
    // eslint-disable-next-line no-debugger
    debugger;
    try {
      dispatch(redirectToRoute(AppRoutes.ROOT));
      localStorage.removeItem('token');
      return await apiInstance.delete(ApiRoutes.LOGOUT);
    } catch (err) {
      throw new Error(err);
    }
  });

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
  },
  extraReducers: {
    [fetchLogin.pending]: (state) => {
      state.loginStatus.isLoading = true;
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.loginStatus.isLoading = false;
      state.userInfo = action.payload;
      state.authorizationStatus = AuthorizationStatus.AUTH;
    },
    [fetchLogin.rejected]: (state) => {
      state.loginStatus.isError = true;
    },

    [fetchLogout.pending]: (state) => {
      state.logoutStatus.isLoading = true;
    },
    [fetchLogout.fulfilled]: (state) => {
      state.logoutStatus.isLoading = false;
      state.userInfo = {};
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    },
    [fetchLogout.rejected]: (state) => {
      state.logoutStatus.isError = true;
    },
  },
});

export const { requiredAuthorization, setAuthUserData } = authorization.actions;
export default authorization.reducer;
