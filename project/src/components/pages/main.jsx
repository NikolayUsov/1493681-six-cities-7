import React, { useState } from 'react';
import OfferCard from '../offer-card/offer-card.jsx';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import { OfferCardParent } from '../../const.js';
import CityNavigation from '../city-navigation/city-navigation';
import OffersBoard from '../offersBoard/offers-board.jsx';

const DEFAULT_MENU = 'Amsterdam';

export default function PageMain({ offers }) {
  const [currentMenu, setCurrentMenu] = useState(DEFAULT_MENU);
  //const [currentSort, setCurrentSort] = useState();

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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

