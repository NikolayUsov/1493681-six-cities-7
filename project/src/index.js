/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocs/offers';

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} />
  </React.StrictMode>,
  document.getElementById('root'),
);
