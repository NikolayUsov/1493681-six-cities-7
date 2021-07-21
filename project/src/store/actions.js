export const ActionType = {
  REDIRECT_TO_ROUTE: 'route/redirect',
  REDIRECT_TO_BACK: 'route/redirectoBack',
};

export const ActionCreator = {
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  redirectToBack: () => ({
    type: ActionType.REDIRECT_TO_BACK,
  }),
};
