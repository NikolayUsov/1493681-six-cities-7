/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../components/logo/logo';
import { fetchLogin } from '../store/api-action';

const InitFormValue = {
  email: '',
  password: '',
};

export function Login({ loginSubbmit }) {
  const [inputsValue, setInputsValue] = useState(InitFormValue);

  const onFormSubmit = (evt) => {
    evt.preventdefault();
    loginSubbmit(inputsValue);
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={onFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label htmlFor="email" className="visually-hidden">E-mail</label>
                <input
                  value={inputsValue.email}
                  onChange={
                    (evt) => setInputsValue((pref) => ({ ...pref, email: evt.target.value }))
                  }
                  id="email"
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  value={inputsValue.password}
                  onChange={
                    (evt) => setInputsValue((pref) => ({ ...pref, password: evt.target.value }))
                  }
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
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
Login.propTypes = {
  // eslint-disable-next-line react/require-default-props
  loginSubbmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  loginSubbmit(inputsValue) {
    dispatch(fetchLogin(inputsValue));
  },
});

export default connect(null, mapDispatchToProps)(Login);
