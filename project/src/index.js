import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/app/app';
import createAPI from './services/api';
import { checkAuth, requiredAuthorization } from './store/reducers/features/user/user-slice';
import { fetchOffers } from './store/reducers/features/offers/offers-slice';
import RedirectMiddlewares from './store/middlewars/redirect';
import { AuthorizationStatus } from './const';
import reducer from './store/reducers/root-reducer';
import {
  Router
} from 'react-router-dom';
import browserHistory from './browser-history';

const api = createAPI(() => {
  store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }).concat(RedirectMiddlewares),
});

store.dispatch(fetchOffers());
store.dispatch(checkAuth());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={browserHistory}>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

export { api };
