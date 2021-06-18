import { ActionType } from './actions';
import { offers } from '../mocs/offers';
import { SortFunctions } from '../const';

const SORT_TYPE_DEFAULT = 'Popular';
const CITY_DEFAULT = 'Amsterdam';

const getRenderedOffers = (arr, filterType, sortType) => arr.slice()
  .filter((elem) => elem.city.name === filterType)
  .sort(SortFunctions[sortType]);

const rendered = getRenderedOffers(offers, CITY_DEFAULT, SORT_TYPE_DEFAULT);

const initState = {
  offers,
  currentCity: CITY_DEFAULT,
  sortType: SORT_TYPE_DEFAULT,
  rendered,
  isLogin: true,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
        rendered: getRenderedOffers(state.offers, action.payload, state.sortType),
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
        rendered: getRenderedOffers(state.offers, state.currentCity, action.payload),
      };
    case ActionType.TOGGLE_AUTH:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    default: return state;
  }
}
