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
import { fetchHostels } from './store/api-action';

const api = createAPI();
const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(fetchHostels());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
