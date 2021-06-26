export const ActionType = {
  CHANGE_CURRENT_CITY: 'changeCurrentCity',
  CHANGE_SORT_TYPE: 'changeSortType',
  TOGGLE_AUTH: 'toggleAuth',

  FETCH_OFFERS_REQUEST: 'offers/fetch-request',
  FETCH_OFFERS_SUCCESS: 'offers/fetch-success',
  FETCH_OFFERS_ERROR: 'offers/fetch-error',

  CHECK_AUTH_REQUEST: 'checkauth/request',
  CHECK_AUTH_SUCCESS: 'checkauth/success',
  CHECK_AUTH_ERROR: 'checkauth/error',
  CHECK_AUTH_NO_AUTH: 'checkauth/noAuth',

  LOGIN_REQUEST: 'login/request',
  LOGIN_SUCCESS: 'login/success',
  LOGIN_ERROR: 'login/error',

  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',

  REDIRECT_TO_ROUTE: 'route/redirect',
};

export const ActionCreator = {

  fetchOffersSuccess: (offers) => ({
    type: ActionType.FETCH_OFFERS_SUCCESS,
    payload: offers,
  }),
  fetchOffersRequest: () => ({
    type: ActionType.FETCH_OFFERS_REQUEST,
  }),
  fetchOffersError: () => ({
    type: ActionType.FETCH_OFFERS_ERROR,
  }),

  checkAuthRequest: () => ({
    type: ActionType.CHECK_AUTH_REQUEST,
  }),
  checkAuthSuccess: (authInfo) => ({
    type: ActionType.CHECK_AUTH_SUCCESS,
    payload: authInfo,
  }),
  checkAuthNoAuth: () => ({
    type: ActionType.CHECK_AUTH_NO_AUTH,
  }),
  checkAuthError: () => ({
    type: ActionType.CHECK_AUTH_ERROR,
  }),

  changeCity: (currentCity) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: currentCity,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),

  loginRequest: () => ({
    type: ActionType.LOGIN_REQUEST,
  }),
  loginSuccess: (userInfo) => ({
    type: ActionType.LOGIN_SUCCESS,
    payload: userInfo,
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  logout: () => ({
    type: ActionType.LOGOUT,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
