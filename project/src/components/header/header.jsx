import React from 'react';
import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';

export default function Header() {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <UserNavigation />
        </div>
      </div>
    </header>
  );
}
