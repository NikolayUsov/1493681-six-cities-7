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
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import { selectAuthorizationStatus } from '../../store/reducers/features/user/user-selector';

function App({ authorizationStatus }) {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <Main />
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
            <Favorites />
          )}
        />

        <Route path={AppRoutes.OFFER_DETAILS}>
          <Details />
        </Route>
        <Route path={AppRoutes.NOT_FOUND}>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: selectAuthorizationStatus(state),
});

export { App };
export default connect(mapStateToProps)(App);
