import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/header';
import Logo from '../components/logo/logo';
import FavoriteList from '../components/favorite-list/favorite-list';
import OfferCardProp from '../components/offer-card/offer-card.prop';
import FavoriteListEmpty from '../components/favorite-list-empty/favorite-list-empty';

export default function Favorites({ offers }) {
  const mainContent = offers.length ? <FavoriteList offers={offers} /> : <FavoriteListEmpty />;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {mainContent}
        </div>
      </main>
      <footer className="footer container">
        <Logo isFooter />
      </footer>
    </div>
  );
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp).isRequired,
};
