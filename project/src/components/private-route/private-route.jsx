import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { selectAuthorizationStatus } from '../../store/reducers/features/user/user-selector';

export function PrivateRoute({
  path, exact, render,
}) {
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.NO_AUTH
          ? <Redirect to={AppRoutes.LOGIN} />
          : render(routeProps)
      )}
    />
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
