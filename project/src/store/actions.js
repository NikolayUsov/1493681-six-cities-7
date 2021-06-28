export const ActionType = {
  CHANGE_CURRENT_CITY: 'changeCurrentCity',
  CHANGE_SORT_TYPE: 'changeSortType',
  TOGGLE_AUTH: 'toggleAuth',

  FETCH_OFFERS_REQUEST: 'offers/fetch-request',
  FETCH_OFFERS_SUCCESS: 'offers/fetch-success',
  FETCH_OFFERS_ERROR: 'offers/fetch-error',

  LOGIN_REQUEST: 'login/request',
  LOGIN_SUCCESS: 'login/success',
  LOGIN_ERROR: 'login/error',

  LOGOUT_REQUEST: 'logout/request',
  LOGOUT_SUCCESS: 'logout/success',
  LOGOUT_ERROR: 'logout/error',
  SET_USER_INFO: 'auth/setUserInfo',
  REQUIRED_AUTHORIZATION: 'auth/requiredAuthorization',
  LOGOUT: 'logout',

  FETCH_OFFER_DETAILS_REQUEST: 'offer-details/request',
  FETCH_OFFER_DETAILS_SUCCESS: 'offer-details/succes',
  FETCH_OFFER_DETAILS_ERROR: 'offer-details/error',

  FETCH_NEARBY_OFFER_REQUEST: 'offer-nearby/request',
  FETCH_NEARBY_OFFER_SUCCESS: 'offer-nearby/success',
  FETCH_NEARBY_OFFER_ERROR: 'offer-nearby/error',

  FETCH_REVIEWS_REQUEST: 'review/request',
  FETCH_REVIEWS_ERROR: 'review/error',
  FETCH_REVIEWS_SUCCESS: 'review/success',

  REDIRECT_TO_ROUTE: 'route/redirect',
};

export const ActionCreator = {
  fetchReviewRequest: () => ({
    type: ActionType.FETCH_REVIEWS_REQUEST,
  }),
  fetchReviewSuccess: (reviews) => ({
    type: ActionType.FETCH_REVIEWS_SUCCESS,
    payload: reviews,
  }),
  fetchReviewError: () => ({
    type: ActionType.FETCH_REVIEWS_ERROR,
  }),

  fetchNearbyOffersRequest: () => ({
    type: ActionType.FETCH_NEARBY_OFFER_REQUEST,
  }),
  fetchNearbyOffersSuccess: (offers) => ({
    type: ActionType.FETCH_NEARBY_OFFER_SUCCESS,
    payload: offers,
  }),
  fetchNearbyOffersError: () => ({
    type: ActionType.FETCH_NEARBY_OFFER_ERROR,
  }),

  fetchOfferDetailRequest: () => ({
    type: ActionType.FETCH_OFFER_DETAILS_REQUEST,
  }),
  fetchOfferDetailSuccess: (offer) => ({
    type: ActionType.FETCH_OFFER_DETAILS_SUCCESS,
    payload: offer,
  }),
  fetchOfferDetailError: () => ({
    type: ActionType.FETCH_OFFER_DETAILS_ERROR,
  }),

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

  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  setAuthUserData: (userInfo) => ({
    type: ActionType.SET_USER_INFO,
    payload: userInfo,
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
  loginSuccess: () => ({
    type: ActionType.LOGIN_SUCCESS,
  }),
  loginError: () => ({
    type: ActionType.LOGIN_ERROR,
  }),

  logoutRequest: () => ({
    type: ActionType.LOGOUT_REQUEST,
  }),

  logoutSuccess: () => ({
    type: ActionType.LOGOUT_SUCCESS,
  }),

  logoutError: () => ({
    type: ActionType.LOGOUT_ERROR,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
