import reducer, { changeCity, changeSortType } from './app-slice';
import { CITIES } from '../../../../const';

const SORT_TYPE_DEFAULT = 'Popular';

describe('Test app-slice reducer:', () => {
  const initialState = {
    currentCity: CITIES[0],
    currentSortType: SORT_TYPE_DEFAULT,
  };
  const currentValue = 'test';

  beforeAll(() => initialState);

  it('Should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Shoud return state with new city;', () => {
    expect(reducer(initialState, changeCity(currentValue))).toEqual({ ...initialState, currentCity: currentValue });
  });

  it('Shoud return state with new sortType;', () => {
    expect(reducer(initialState, changeSortType(currentValue))).toEqual({ ...initialState, currentSortType: currentValue });
  });
});
