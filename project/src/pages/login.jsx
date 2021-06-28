/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Header from '../components/header/header';

// eslint-disable-next-line import/no-named-as-default

// eslint-disable-next-line import/no-named-as-default
import LoginForm from '../components/login-form/login-form';

export default function Login() {
  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
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
