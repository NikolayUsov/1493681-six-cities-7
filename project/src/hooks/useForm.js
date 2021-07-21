import { useState } from 'react';

export default function useForm(initFormInput) {
  const [state, setState] = useState(initFormInput);
  const onBlur = (evt) => {
    const { name } = evt.target;

    const showError = !state[name].isValid && state[name].touched;

    setState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        showError,
      },
    }));
  };

  const onFocus = (evt) => {
    const { name } = evt.target;
    const showError = false;
    setState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        showError,
      },
    }));
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;

    const isValid = state[name].rule.test(value);
    const errorText = `Wrong format ${name}`;
    const touched = !!(value.trim());
    setState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        isValid,
        touched,
        errorText,
      },
    }));
  };

  return [state, onBlur, onChange, onFocus];
}
