import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Details from '../../pages/details';
import NotFound from '../../pages/not-found';
import { AppRoutes } from '../../const';
import { createRandomReviews } from '../../mocs/reviews';
import { offers } from '../../mocs/offers';

const reviews = createRandomReviews();

function App() {
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

export default App;
