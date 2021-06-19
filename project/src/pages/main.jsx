/* eslint-disable import/no-named-as-default */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HashLoader from 'react-spinners/HashLoader';
import CityNavigation from '../components/city-navigation/city-navigation';
import OffersBoard from '../components/offersBoard/offers-board';
import Header from '../components/header/header';
import OffersBoardEmpty from '../components/offers-board-empty/offers-board-empty';

const loaderStyle = {
  display: 'block',
  margin: '100px auto 0',
};

export function Main({ isLoading, isError }) {
  let infoComponent = null;

  if (isLoading) {
    infoComponent = (
      <HashLoader
        css={loaderStyle}
        color="#4481c3"
        size={150}
      />
    );
  }

  if (isError) {
    infoComponent = (
      <OffersBoardEmpty isError={isError} />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityNavigation />
        {infoComponent || <OffersBoard />}
      </main>
    </div>
  );
}

Main.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool,
};

Main.defaultProps = {
  isError: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLoading: state.appStatus.isLoading,
  isError: state.appStatus.isError,
});

export default connect(mapStateToProps)(Main);
