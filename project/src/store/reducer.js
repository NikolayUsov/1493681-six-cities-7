// eslint-disable-next-line import/named
import { ActionType } from './actions';
import { CITIES, SortFunctions, AuthorizationStatus } from '../const';

const SORT_TYPE_DEFAULT = 'Popular';

const getCurrentOffers = (arr, city, sortType) => arr
  .filter((elem) => elem.city.name === city)
  .sort(SortFunctions[sortType]);

const initState = {
  offers: [],
  currentCity: CITIES[0],
  sortType: SORT_TYPE_DEFAULT,
  currentOffers: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
  fetchOffersStatus: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },
  checkAuthStatus: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },

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
  appStatus: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },
  offerDetails: {},
  fetchOfferDetails: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },

  offersNearby: [],
  fetchOffersNearby: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },

  reviews: [],
  fetchReviewsStatus: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
        currentOffers: getCurrentOffers(state.offers, action.payload, state.sortType),
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
        currentOffers: getCurrentOffers(state.offers, state.currentCity, action.payload),
      };
    case ActionType.FETCH_OFFERS_REQUEST:
      return {
        ...state,
        fetchOffersStatus: { ...state.fetchOffersStatus, isLoading: true },
      };
    case ActionType.FETCH_OFFERS_SUCCESS:
      return {
        ...state,
        offers: action.payload,
        fetchOffersStatus: { ...state.fetchOffersStatus, isLoading: false, isSuccess: true },
        currentOffers: getCurrentOffers(action.payload, state.currentCity, state.sortType),
      };
    case ActionType.FETCH_OFFERS_ERROR:
      return {
        ...state,
        fetchOffersStatus: { ...state.fetchOffersStatus, isLoading: false, isError: true },
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case ActionType.LOGIN_REQUEST:
      return {
        ...state,
        loginStatus: { ...state.loginStatus, isLoading: true },
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: { ...state.loginStatus, isLoading: false, isSuccess: true },
      };
    case ActionType.LOGIN_ERROR:
      return {
        ...state,
        loginStatus: { ...state.loginStatus, isLoading: false, isError: true },
      };

    case ActionType.LOGOUT_REQUEST:
      return {
        ...state,
        logoutStatus: { ...state.loginStatus, isLoading: true },
      };
    case ActionType.LOGOUT_SUCCESS:
      return {
        ...state,
        logoutStatus: { ...state.loginStatus, isLoading: false, isSuccess: true },
      };
    case ActionType.LOGOUT_ERROR:
      return {
        ...state,
        logoutStatus: { ...state.loginStatus, isLoading: false, isError: true },
      };

    case ActionType.FETCH_OFFER_DETAILS_REQUEST:
      return {
        ...state,
        fetchOfferDetails: { ...state.fetchOfferDetails, isLoading: true },
      };
    case ActionType.FETCH_OFFER_DETAILS_SUCCESS:
      return {
        ...state,
        fetchOfferDetails: { ...state.fetchOfferDetails, isLoading: false, isSuccess: true },
        offerDetails: action.payload,
      };
    case ActionType.FETCH_OFFER_DETAILS_ERROR:
      return {
        ...state,
        fetchOfferDetails: { ...state.fetchOfferDetails, isLoading: false, isError: true },
      };

    case ActionType.FETCH_NEARBY_OFFER_REQUEST:
      return {
        ...state,
        fetchOffersNearby: { ...state.fetchOffersNearby, isLoading: true },
      };
    case ActionType.FETCH_NEARBY_OFFER_SUCCESS:
      return {
        ...state,
        fetchOffersNearby: { ...state.fetchOffersNearby, isLoading: true },
        offersNearby: action.payload,
      };
    case ActionType.FETCH_NEARBY_OFFER_ERROR:
      return {
        ...state,
        fetchOffersNearby: { ...state.fetchOffersNearby, isLoading: false, isError: true },
      };

    case ActionType.FETCH_REVIEWS_REQUEST:
      return {
        ...state,
        fetchReviewsStatus: { ...state.fetchReviewsStatus, isLoading: true },
      };
    case ActionType.FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        fetchReviewsStatus: { ...state.fetchReviewsStatus, isLoading: true },
        reviews: action.payload,
      };
    case ActionType.FETCH_REVIEWS_ERROR:
      return {
        ...state,
        fetchReviewsStatus: { ...state.fetchReviewsStatus, isLoading: false, isError: true },
      };
    default: return state;
  }
}
