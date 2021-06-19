export const ActionType = {
  SUCCESS_LOAD_DATA: 'successLoadData',
  ERROR_LOAD_DATA: 'errorLoadData',
  CHANGE_CURRENT_CITY: 'changeCurrentCity',
  CHANGE_SORT_TYPE: 'changeSortType',
  TOGGLE_AUTH: 'toggleAuth',
};

export const ActionCreator = {
  successLoadData: () => ({
    type: ActionType.SUCCESS_LOAD_DATA,
  }),
  errorLoadData: () => ({
    type: ActionType.ERROR_LOAD_DATA,
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
};
