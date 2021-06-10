import React from 'react';
import { Link } from 'react-router-dom';
import { AppRouts } from '../../const';
import Logo from '../logo/logo';

export default function PageNotFound() {
  const headerStyle = {
    height: '100vh',
    background: 'url(https://www.varlamov.me/2016/omsk_ploh/00s.jpg), no-repeat',
    backgroundSize: 'cover',

  };

  const linkStyle = {
    fontSize: '24px',
    color: 'white',
    fontWeight: 'bold',
  };
  return (
    <div className="page">
      <header style={headerStyle} className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <div>
              <p
                style={linkStyle}
              >
                Что то ты свернул не туда, может найдем другое
                <Link style={{ fontSize: '24px', color: 'gray' }} to={AppRouts.ROOT}>
                  Место
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
