/* eslint-disable import/prefer-default-export */
import browserHistory from '../browser-history';
import { AppRoutes } from '../const';
import adaptedToClient from '../utils/adapte-to-client';
import { ActionCreator } from './actions';

const ApiRoute = {
  HOSTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const fetchHostels = () => (dispatch, _store, api) => {
  dispatch(ActionCreator.fetchOffersRequest());
  api.get(ApiRoute.HOSTELS)
    .then(({ data }) => {
      const offers = data.map(adaptedToClient);
      dispatch(ActionCreator.fetchOffersSuccess(offers));
    })
    .catch(() => { dispatch(ActionCreator.fetchOffersError()); });
};

export const checkAuth = () => (dispatch, _store, api) => {
  dispatch(ActionCreator.checkAuthRequest());
  api.get(ApiRoute.LOGIN)
    .then(({ data }) => {
      dispatch(ActionCreator.checkAuthSuccess(data));
    })
    .catch(() => { dispatch(ActionCreator.checkAuthError()); });
};

export const fetchLogin = (loginData) => (dispatch, _store, api) => {
  dispatch(ActionCreator.loginRequest());
  api.post(ApiRoute.LOGIN, loginData)
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.loginSuccess(data));
      browserHistory.push(AppRoutes.FAVORITES);
      // dispatch(ActionCreator.redirectToRoute(AppRoutes.FAVORITES));
    });
};

export const fetchLogout = () => (dispatch, _store, api) => {
  api.delete(ApiRoute.LOGOUT)
    .then(() => { dispatch(ActionCreator.logout()); })
    .then(() => { dispatch(ActionCreator.redirectToRoute(AppRoutes.ROOT)); });
};
