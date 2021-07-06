import { combineReducers } from 'redux';
import offersSlice from './features/offers/offers-slice';
import appSlice from './features/app/app-slice';
import userSlice from './features/user/user-slice';
import commentSlice from './features/comments/comment-slice';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.OFFERS]: offersSlice,
  [NameSpace.APP]: appSlice,
  [NameSpace.USER]: userSlice,
  [NameSpace.COMMENT]: commentSlice,
});
