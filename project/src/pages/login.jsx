/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Logo from '../components/logo/logo';

// eslint-disable-next-line import/no-named-as-default
import UserNavigation from '../components/user-navigation/user-navigation';
// eslint-disable-next-line import/no-named-as-default
import LoginForm from '../components/login-form/login-form';

export default function Login() {
  return (
    <div className="page page--gray page--login">
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
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
