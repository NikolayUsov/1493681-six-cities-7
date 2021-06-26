/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  Router,
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
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const reviews = createRandomReviews();

function App({ offers }) {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <Main offers={offers} />
        </Route>
        <Route exact path={AppRoutes.LOGIN}>
          <Login />
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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
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
