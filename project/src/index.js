import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const OFFERS_COUNT = 9;
const createOffers = (offersCount) => {
  const offers = new Array(offersCount).fill('');
  return offers.map((elem,index) => {
    elem = {id: index};
    return elem;
  });
};

ReactDOM.render(
  <React.StrictMode>
    <App  offers={createOffers(OFFERS_COUNT)}/>
  </React.StrictMode>,
  document.getElementById('root'));
