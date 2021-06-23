/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/app/app';
import reducer from './store/reducer';
import createAPI from './services/api';
import { checkAuth, fetchHostels } from './store/api-action';
import { ActionCreator } from './store/actions';

// eslint-disable-next-line no-use-before-define
const api = createAPI(() => store.dispatch(ActionCreator.checkAuthNoAuth()));
const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

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
