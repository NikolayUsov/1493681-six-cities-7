import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { AppRoutes, AuthorizationStatus } from '../../const';

export function PrivateRoute({
  path, exact, authorizationStatus, render,
}) {
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoutes.LOGIN} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  authorizationStatus: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps)(PrivateRoute);
