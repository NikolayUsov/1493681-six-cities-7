import { createAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import { ActionType } from '../actions';

const REDIRECT_TO_ROUTE = 'route/redirect';
const REDIRECT_TO_BACK = 'route/redirectoBack';

export default () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  if (action.type === ActionType.REDIRECT_TO_BACK) {
    browserHistory.goBack();
  }
  return next(action);
};

const redirectToRoute = createAction(REDIRECT_TO_ROUTE);
const redirectToBack = createAction(REDIRECT_TO_BACK);

export { redirectToRoute, redirectToBack };
