/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AppRoutes, AuthorizationStatus, CheckAuthStatus } from '../../../../const';
import { redirectToBack, redirectToRoute } from '../../../middlewars/redirect';

const ApiRoutes = {
  HOSTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  NEARBY: '/nearby',
  COMMENTS: '/comments',
};

/* export const checkAuth = () => (dispatch, _store, api) => {
  api.get(ApiRoutes.LOGIN)
    .then(({ data }) => {
      dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(setAuthUserData(data));
    })
    .catch(() => {
      dispatch(setAuthUserData({}));
    });
}; */

export const checkAuth = createAsyncThunk('user/checkAuth',
  async (_, ThunkApi) => {
    const { extra: apiInstance } = ThunkApi;
    try {
      const { data } = await apiInstance.get(ApiRoutes.LOGIN);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  });

export const fetchLogin = createAsyncThunk('user/login',
  async (loginData, ThunkApi) => {
    const { dispatch, extra: apiInstance } = ThunkApi;
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
    const { dispatch, extra: apiInstance } = ThunkApi;
    try {
      localStorage.removeItem('token');
      await apiInstance.delete(ApiRoutes.LOGOUT);
      dispatch(redirectToRoute(AppRoutes.ROOT));
    } catch (err) {
      throw new Error(err);
    }
  });

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  checkAuthStatus: CheckAuthStatus.CHECKING,
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
    [checkAuth.pending]: (state) => {
      state.checkAuthStatus = CheckAuthStatus.CHECKING;
    },
    [checkAuth.fulfilled]: (state, action) => {
      state.checkAuthStatus = CheckAuthStatus.CHECK_DONE;
      state.userInfo = action.payload;
      state.authorizationStatus = AuthorizationStatus.AUTH;
    },
    [checkAuth.rejected]: (state) => {
      state.checkAuthStatus = CheckAuthStatus.CHECK_ERROR;
    },

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
