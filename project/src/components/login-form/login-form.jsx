/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLogin } from '../../store/api-action';

const InitFormValue = {
  email: '',
  password: '',
};

// eslint-disable-next-line react/prop-types
export function LoginForm({ sendLogin }) {
  const [inputsValue, setInputsValue] = useState(InitFormValue);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    sendLogin(inputsValue);
  };
  return (
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
  );
}

LoginForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  sendLogin: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  sendLogin(value) {
    dispatch(fetchLogin(value));
  },
});
export default connect(null, mapDispatchToProps)(LoginForm);
