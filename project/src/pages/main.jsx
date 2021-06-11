import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CityNavigation from '../components/city-navigation/city-navigation';
import OffersBoard from '../components/offersBoard/offers-board';
import Header from '../components/header/header';

const DEFAULT_MENU = 'Amsterdam';

export default function Main({ offers }) {
  const [currentMenu, setCurrentMenu] = useState(DEFAULT_MENU);
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityNavigation
          changeActiveMenu={setCurrentMenu}
          currentMenu={currentMenu}
        />

        <OffersBoard currentCity={currentMenu} offers={offers} />
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
