import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const OFFERS_COUNT = 9;
const createOffers = (offersCount) => new Array(offersCount).fill('').map((_, index) => ({id: index}));
const offers = createOffers(OFFERS_COUNT);

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers}/>
  </React.StrictMode>,
  document.getElementById('root'));
