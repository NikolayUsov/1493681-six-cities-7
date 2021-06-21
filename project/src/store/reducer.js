import { ActionType } from './actions';
import { offers } from '../mocs/offers';
import { CITIES, SortFunctions } from '../const';

const SORT_TYPE_DEFAULT = 'Popular';

const getCurrentOffers = (arr, city, sortType) => arr
  .filter((elem) => elem.city.name === city)
  .sort(SortFunctions[sortType]);

const currentOffers = getCurrentOffers(offers, CITIES[0], SORT_TYPE_DEFAULT);

const initState = {
  offers,
  currentCity: CITIES[0],
  sortType: SORT_TYPE_DEFAULT,
  currentOffers,
  isLogin: true,
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
    case ActionType.SUCCESS_LOAD_DATA:
      return {
        ...state,
        appStatus: { ...state.appStatus, isLoading: false, isSuccess: true },
      };
    case ActionType.ERROR_LOAD_DATA:
      return {
        ...state,
        appStatus: { ...state.appStatus, isLoading: false, isError: true },
      };
    default: return state;
  }
}
