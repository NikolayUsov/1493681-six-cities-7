/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import reducer from './store/reducer';
import { ActionCreator } from './store/actions';

const store = createStore(reducer, composeWithDevTools());

const promiseFunction = (resolve, reject) => {
  setTimeout(() => (Math.random() > 0.5
    ? resolve()
    : reject()), 3000);
};

const pseudoFetch = new Promise(promiseFunction);

pseudoFetch
  .then(() => {
    store.dispatch(ActionCreator.successLoadData());
  })
  .catch(() => store.dispatch(ActionCreator.errorLoadData()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
