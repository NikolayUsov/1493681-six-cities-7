export const ActionType = {
  CHANGE_CURRENT_CITY: 'changeCurrentCity',
  CHANGE_SORT_TYPE: 'changeSortType',
  TOGGLE_AUTH: 'toggleAuth',
};

export const ActionCreator = {
  CHANGE_CITY: (currentCity) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: currentCity,
  }),
  CHANGE_SORT_TYPE: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
  TOGGLE_AUTH: () => ({
    type: ActionType.TOGGLE_AUTH,
  }),
};
