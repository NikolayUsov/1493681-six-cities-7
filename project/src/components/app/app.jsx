import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import PageMain from '../page-main/page-main';
import PropTypes from 'prop-types';
import PageLogin from '../page-login/page-login';
import PageFavorites from '../page-favorites/page-favorites';
import PageOfferDetails  from '../page-offer-details/page-offer-details';
import PageNotFoundfrom from '../page-not-found/page-not-found';
import { AppRouts } from '../../const/const.js';

function App({ offers = [] }) {

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path = {AppRouts.ROOT}>
          <PageMain offers = {offers}/>
        </Route>
        <Route exact path = {AppRouts.LOGIN}>
          <PageLogin />
        </Route>
        <Route exact path = {AppRouts.FAVORITES}>
          <PageFavorites />
        </Route>
        <Route path="/offer/:id?" exact component={PageOfferDetails} />
        <Route>
          <PageNotFoundfrom/>
        </Route>

      </Switch>
    </BrowserRouter>
  );

}

App.propTypes  = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default App;
