import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import PropTypes from 'prop-types';
import PageMain from '../pages/main';
import PageLogin from '../pages/login';
import PageFavorites from '../pages/favorites';
import PageOfferDetails from '../pages/offer-details';
import PageNotFoundfrom from '../pages/404';
import { AppRouts } from '../../const';
import { createRandomReviews } from '../../mocs/reviews';

function App({ offers = [] }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRouts.ROOT}>
          <PageMain offers={offers} />
        </Route>
        <Route exact path={AppRouts.LOGIN}>
          <PageLogin />
        </Route>
        <Route exact path={AppRouts.FAVORITES}>
          <PageFavorites />
        </Route>
        <Route path={AppRouts.OFFER_DETAILS}>
          <PageOfferDetails offers={offers} reviews={createRandomReviews()} />
        </Route>
        <Route>
          <PageNotFoundfrom />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default App;
