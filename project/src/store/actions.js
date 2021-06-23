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

  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
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
  toggleAuth: () => ({
    type: ActionType.TOGGLE_AUTH,
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
