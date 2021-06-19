import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/actions';

export function UserNavigation({ isAuth, toggleAuthorization }) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a onClick={toggleAuthorization} className="header__nav-link header__nav-link--profile" href="/#">
            <div className="header__avatar-wrapper user__avatar-wrapper" />
            <span className="header__user-name user__name">
              {`${isAuth ? 'Oliver.conner@gmail.com' : 'Sign in'}`}
            </span>
          </a>
        </li>
        {isAuth && (
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
  isAuth: PropTypes.bool.isRequired,
};

UserNavigation.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  toggleAuthorization: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  toggleAuthorization() {
    dispatch(ActionCreator.toggleAuth());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(UserNavigation);
