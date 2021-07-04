/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
/* import { createStore, applyMiddleware } from 'redux'; */
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './components/app/app';
import reducer from './store/reducer';
import createAPI from './services/api';
import { checkAuth, fetchHostels } from './store/api-action';
import { ActionCreator } from './store/actions';
import RedirectMiddlewares from './store/middlewars/redirect';
import { AuthorizationStatus } from './const';
import rootReducer from './store/reducers/root-reducer';

const api = createAPI(() => {
  // eslint-disable-next-line no-use-before-define
  store.dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }).concat(RedirectMiddlewares),
});
/* const store = createStore(reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(RedirectMiddlewares),
  )); */

store.dispatch(fetchHostels());
store.dispatch(checkAuth());
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

export default { api };
