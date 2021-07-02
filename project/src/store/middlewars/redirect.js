import browserHistory from '../../browser-history';
import { ActionType } from '../actions';

export default () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }
  // eslint-disable-next-line no-debugger
  debugger;
  if (action.type === ActionType.REDIRECT_TO_BACK) {
    browserHistory.goBack();
  }
  return next(action);
};
