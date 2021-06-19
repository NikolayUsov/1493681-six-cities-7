/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Details from '../../pages/details';
import NotFound from '../../pages/not-found';
import { AppRoutes } from '../../const';
import { createRandomReviews } from '../../mocs/reviews';
import offerCardProp from '../offer-card/offer-card.prop';

const reviews = createRandomReviews();

function App({ offers }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <Main offers={offers} />
        </Route>
        <Route exact path={AppRoutes.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoutes.FAVORITES}>
          <Favorites offers={offers} />
        </Route>
        <Route path={AppRoutes.OFFER_DETAILS}>
          <Details offers={offers} reviews={reviews} />
        </Route>
        <Route>
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export { App };
export default connect(mapStateToProps)(App);
