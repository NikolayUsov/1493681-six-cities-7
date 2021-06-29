/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Loader from '../loader/loader';
import { fetchLogin } from '../../store/api-action';
import styles from './login-form.module.css';
import { apiRequestProp } from '../../utils/prop-types';
import { LoaderType } from '../../const';
import useInput from '../../hooks/useInput';

const PASSWORD_REGEX = /^.{6,}$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const MIN_LENGTH = 6;
const initFormInput = {
  email: {
    value: '',
    isValid: false,
    touched: false,
    errorText: '',
    rule: EMAIL_REGEX,
  },
  password: {
    value: '',
    isValid: false,
    touched: false,
    errorText: '',
    rule: PASSWORD_REGEX,
  },
};

const INPUTS = [
  { type: 'email', label: 'E-mail' },
  { type: 'password', label: 'Password' },
];

export function LoginForm({ sendLogin, loginStatus }) {
  const { isLoading } = loginStatus;
  const [inputsState, setInputsState] = useState(initFormInput);
  const isButtonDisabled = (inputsState.email.isValid && inputsState.password.isValid);
  const [onInputBlur, handleInputChange] = useInput(inputsState, setInputsState);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    sendLogin({
      email: inputsState.email.value,
      password: inputsState.password.value,
    });
  };
  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={onFormSubmit}
      >
        {INPUTS.map(({ type, label }) => (
          <div
            className={classNames('login__input-wrapper', { [styles.wrapper]: true })}
            key={label}
          >
            <label htmlFor="email" className="visually-hidden">{label}</label>
            <input
              value={inputsState[type].value}
              onBlur={onInputBlur}
              onChange={handleInputChange}
              id={type}
              className={classNames('login__input', 'form__input', { [styles.borderError]: (!inputsState[type].isValid && inputsState[type].touched) })}
              type={type}
              name={type}
              placeholder={type[0].toUpperCase() + type.slice(1)}
              required
              disabled={isLoading}
            />
            {(!inputsState[type].isValid && inputsState[type].touched) && (
            <span className={[styles.messageError]}>{inputsState[type].errorText}</span>)}
          </div>
        ))}
        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={!isButtonDisabled || isLoading}
        >
          {isLoading ? <Loader type={LoaderType.button} /> : 'Sign in'}
        </button>
      </form>
    </section>

  );
}

LoginForm.propTypes = {
  loginStatus: apiRequestProp.isRequired,
  sendLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus,
});
const mapDispatchToProps = (dispatch) => ({
  sendLogin(value) {
    dispatch(fetchLogin(value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
