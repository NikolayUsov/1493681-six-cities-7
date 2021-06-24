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
  isLogin: true,
  AuthorizationStatus: AuthorizationStatus.UNKNOWN,
  fetchOffersStatus: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },
  appStatus: {
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
    case ActionType.TOGGLE_AUTH:
      return {
        ...state,
        isLogin: !state.isLogin,
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
        AuthorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        AuthorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default: return state;
  }
}
