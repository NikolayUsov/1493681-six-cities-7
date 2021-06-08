import React, { useState } from 'react';
import OfferCard from '../offer-card/offer-card.jsx';
import PropTypes from 'prop-types';
import { OfferCardParent } from '../../const.js';
import CityNavigation from '../city-navigation/city-navigation';
import OffersBoard from '../offersBoard/offers-board.jsx';
import Header from '../header/header.jsx';

const DEFAULT_MENU = 'Amsterdam';

export default function PageMain({ offers }) {
  const [currentMenu, setCurrentMenu] = useState(DEFAULT_MENU);


  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityNavigation
              changeActiveMenu={setCurrentMenu}
              currentMenu={currentMenu}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersBoard currentCity={currentMenu} /* currentSort = {currentSort} */>
              {offers.map((offer) => <OfferCard key={offer.id} offer={offer} page={OfferCardParent.MAIN}/>)}
            </OffersBoard>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

PageMain.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

