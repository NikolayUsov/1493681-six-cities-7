import React from 'react';
import PropTypes from 'prop-types';

export default function UserNavigation({ isAuthorization }) {
  const renderUserNav = (isAuth) => {
    if (isAuth) {
      return (
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="/#">
            <div className="header__avatar-wrapper user__avatar-wrapper" />
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          </a>
        </li>
      );
    }
    return (
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="/#">
          <div className="header__avatar-wrapper user__avatar-wrapper" />
          <span className="header__login">Sign in</span>
        </a>
      </li>
    );
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {renderUserNav(isAuthorization)}
      </ul>
    </nav>
  );
}

UserNavigation.propTypes = {
  isAuthorization: PropTypes.bool.isRequired,
};
