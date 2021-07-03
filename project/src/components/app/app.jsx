/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Details from '../../pages/details';
import NotFound from '../../pages/not-found';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { createRandomReviews } from '../../mocs/reviews';
import offerCardProp from '../offer-card/offer-card.prop';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const reviews = createRandomReviews();

function App({ offers, authorizationStatus }) {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <Main offers={offers} />
        </Route>
        <Route exact path={AppRoutes.LOGIN}>
          {authorizationStatus === AuthorizationStatus.AUTH
            ? <Redirect to={AppRoutes.ROOT} />
            : <Login />}
        </Route>
        <PrivateRoute
          exact
          path={AppRoutes.FAVORITES}
          render={() => (
            <Favorites offers={offers} />
          )}
        />

        <Route path={AppRoutes.OFFER_DETAILS}>
          <Details offers={offers} reviews={reviews} />
        </Route>
        <Route path={AppRoutes.NOT_FOUND}>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
});

export { App };
export default connect(mapStateToProps)(App);
