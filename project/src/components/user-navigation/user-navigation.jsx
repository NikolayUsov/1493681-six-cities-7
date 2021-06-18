import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/actions';

export function UserNavigation({ isAuthorization, toggleAuthorization }) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a onClick={toggleAuthorization} className="header__nav-link header__nav-link--profile" href="/#">
            <div className="header__avatar-wrapper user__avatar-wrapper" />
            <span className="header__user-name user__name">
              {`${isAuthorization ? 'Oliver.conner@gmail.com' : 'Sign in'}`}
            </span>
          </a>
        </li>
        {isAuthorization && (
        <li className="header__nav-item">
          <a className="header__nav-link" href="/#" onClick={toggleAuthorization}>
            <span className="header__signout">Sign out</span>
          </a>
        </li>
        )}
      </ul>
    </nav>
  );
}

UserNavigation.propTypes = {
  isAuthorization: PropTypes.bool.isRequired,
};

UserNavigation.propTypes = {
  isAuthorization: PropTypes.bool.isRequired,
  toggleAuthorization: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorization: state.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  toggleAuthorization() {
    dispatch(ActionCreator.TOGGLE_AUTH());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(UserNavigation);
