/* eslint-disable no-useless-escape */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import Loader from '../loader/loader';
import styles from './login-form.module.scss';
import { LoaderType } from '../../const';
import useForm from '../../hooks/useForm';
import ErrorRequest from '../error-request/error-request';
import { selectLoginStatus } from '../../store/reducers/features/user/user-selector';
import { fetchLogin } from '../../store/reducers/features/user/user-slice';

const PASSWORD_REGEX = /^.{6,}$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    showError: false,
    errorText: '',
    rule: PASSWORD_REGEX,
  },
};

const INPUTS = [
  { type: 'email', label: 'Email' },
  { type: 'password', label: 'Password' },
];

export function LoginForm() {
  const { isLoading, isError } = useSelector(selectLoginStatus);
  const [inputs, handleBlur, handleChange, handleFocus] = useForm(initFormInput);
  const isButtonDisabled = (inputs.email.isValid && inputs.password.isValid);
  const dispatch = useDispatch();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fetchLogin({
      email: inputs.email.value,
      password: inputs.password.value,
    }));
  };

  return (
    <section className="login">
      {isError && <ErrorRequest refreshFunc={handleFormSubmit} />}
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleFormSubmit}
      >
        {INPUTS.map(({ type, label }) => (
          <div
            className={classNames('login__input-wrapper', { [styles.wrapper]: true })}
            key={label}
          >
            <label htmlFor="email" className="visually-hidden">{label}</label>
            <input
              value={inputs[type].value}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              id={type}
              data-testid={type}
              className={classNames('login__input', 'form__input', { [styles.borderError]: inputs[type].showError })}
              type={type}
              name={type}
              placeholder={label}
              required
              disabled={isLoading}
            />
            {inputs[type].showError && (
              <span
                data-testid="error"
                className={[styles.messageError]}
              >
                {inputs[type].errorText}
              </span>
            )}
          </div>
        ))}
        <button
          className="login__submit form__submit button"
          type="submit"
          data-testid="button"
          disabled={!isButtonDisabled || isLoading}
        >
          {isLoading ? <Loader type={LoaderType.button} /> : 'Sign in'}
        </button>
      </form>
    </section>

  );
}

export default LoginForm;
