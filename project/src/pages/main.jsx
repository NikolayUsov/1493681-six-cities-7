/* eslint-disable import/no-named-as-default */
import React from 'react';
import { connect } from 'react-redux';

import CityNavigation from '../components/city-navigation/city-navigation';
import OffersBoard from '../components/offersBoard/offers-board';
import Header from '../components/header/header';

export function Main() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityNavigation />
        <OffersBoard />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.appStatus.isLoading,
  isError: state.appStatus.isError,
});

export default connect(mapStateToProps)(Main);
