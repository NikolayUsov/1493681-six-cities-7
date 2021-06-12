import React from 'react';
import PropTypes from 'prop-types';

export default function UserNavigation({ isAuthorization }) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="/#">
            <div className="header__avatar-wrapper user__avatar-wrapper" />
            <span className="header__user-name user__name">
              {`${isAuthorization ? 'Oliver.conner@gmail.com' : 'Sign out'}`}
            </span>
          </a>
        </li>
        {isAuthorization && (
        <li className="header__nav-item">
          <a className="header__nav-link" href="/#">
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
