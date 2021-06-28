/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLogin } from '../../store/api-action';
import './login-form.css';

// eslint-disable-next-line no-useless-escape
const EMAIL_REGXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const MIN_LENGTH = 6;
const InitFormInput = {
  email: {
    value: '',
    isValid: false,
    showError: false,
    errorText: '',
  },
  password: {
    value: '',
    isValid: false,
    showError: false,
    errorText: '',
  },
};

const INPUTS = [
  { type: 'email', label: 'E-mail' },
  { type: 'password', label: 'Password' },
];

const checkValidStatus = (inputType, inputText) => {
  if (!inputText) {
    return [false, ''];
  }
  if (inputType === 'email' && !EMAIL_REGXP.test(inputText)) {
    return [false, 'Неправильный формат почтового адресса'];
  }

  if (inputType === 'password' && /\s/.test(inputText)) {
    return [false, 'Пароль не должен включать пробелы'];
  }

  if (inputType === 'password' && inputText.length < MIN_LENGTH) {
    return [false, `Введите еще ${MIN_LENGTH - inputText.length} зн.`];
  }
  return [true, ''];
};

export function LoginForm({ sendLogin }) {
  const [inputsState, setInputsState] = useState(InitFormInput);
  const isButtonDissabled = inputsState.email.isValid && inputsState.password.isValid;
  const onInputChange = (inputType, evt) => {
    const [status, errorText] = checkValidStatus(inputType, evt.target.value);

    if (!evt.target.value) {
      setInputsState((pref) => ({
        ...pref,
        [inputType]: {
          value: evt.target.value, isValid: status, errorText, showError: false,
        },
      }));
    }
    setInputsState((pref) => ({
      ...pref,
      [inputType]: {
        ...pref[inputType], value: evt.target.value, isValid: status, errorText,
      },
    }));
  };

  const onInputBlur = (inputType) => {
    setInputsState((pref) => ({
      ...pref,
      [inputType]: { ...pref[inputType], showError: true },
    }));
  };
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    sendLogin({ email: inputsState.email.value, password: inputsState.password.value });
  };
  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={onFormSubmit}
    >
      {INPUTS.map(({ type, label }) => (
        <div className="login__input-wrapper form__input-wrapper" key={label}>
          <label htmlFor="email" className="visually-hidden">{label}</label>
          <input
            value={inputsState[type].value}
            onChange={(evt) => onInputChange(type, evt)}
            onBlur={() => onInputBlur(type)}
            id={type}
            className="login__input form__input"
            type={type}
            name={type}
            placeholder={type[0].toUpperCase() + type.slice(1)}
            required
          />
          {(!inputsState[type].isValid && inputsState[type].showError) && <span className="login__input-error">{inputsState[type].errorText}</span>}
        </div>
      ))}
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={!isButtonDissabled}
      >
        Sign in
      </button>
    </form>
  );
}

LoginForm.propTypes = {

  sendLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendLogin(value) {
    dispatch(fetchLogin(value));
  },
});
export default connect(null, mapDispatchToProps)(LoginForm);
