/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/app/app';
import createAPI from './services/api';
import { checkAuth, requiredAuthorization } from './store/reducers/features/user/user-slice';
import { fetchOffers } from './store/reducers/features/offers/offers-slice';
import RedirectMiddlewares from './store/middlewars/redirect';
import { AuthorizationStatus } from './const';
import reducer from './store/reducers/root-reducer';

const api = createAPI(() => {
  // eslint-disable-next-line no-use-before-define
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
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

export { api };
