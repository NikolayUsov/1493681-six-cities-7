/* eslint-disable import/prefer-default-export */
import { AppRoutes, AuthorizationStatus } from '../const';
import adaptedToClient from '../utils/adapte-to-client';
import { ActionCreator } from './actions';

const ApiRoutes = {
  HOSTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const fetchHostels = () => (dispatch, _store, api) => {
  dispatch(ActionCreator.fetchOffersRequest());
  api.get(ApiRoutes.HOSTELS)
    .then(({ data }) => {
      const offers = data.map(adaptedToClient);
      dispatch(ActionCreator.fetchOffersSuccess(offers));
    })
    .catch(() => { dispatch(ActionCreator.fetchOffersError()); });
};

export const checkAuth = () => (dispatch, _store, api) => {
  api.get(ApiRoutes.LOGIN)
    .then(({ data }) => {
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setAuthUserData(data));
    })
    .catch(() => {
      dispatch(ActionCreator.setAuthUserData({}));
    });
};

export const fetchLogin = (loginData) => (dispatch, _store, api) => {
  dispatch(ActionCreator.loginRequest());
  api.post(ApiRoutes.LOGIN, loginData)
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setAuthUserData(data));
      dispatch(ActionCreator.loginSuccess());
      dispatch(ActionCreator.redirectToRoute(AppRoutes.ROOT));
    })
    .catch(() => {
      dispatch(ActionCreator.loginError());
    });
};

export const fetchLogout = () => (dispatch, _store, api) => {
  dispatch(ActionCreator.logoutRequest());
  api.delete(ApiRoutes.LOGOUT)
    .then(() => {
      dispatch(ActionCreator.logoutSuccess());
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
    })
    .then(() => { dispatch(ActionCreator.redirectToRoute(AppRoutes.ROOT)); })
    .catch(() => dispatch(ActionCreator.logoutError()));
};
