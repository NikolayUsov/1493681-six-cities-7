export default function useInput(state, setState) {
  const onInputBlur = (evt) => {
    const { name, value } = evt.target;
    if (!value) {
      setState((prev) => ({
        ...prev,
        [name]: { ...prev[name], touched: false },
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      [name]: { ...prev[name], touched: true },
    }));
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    if (!value) {
      setState((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          value,
          isValid: false,
          errorText: '',
          touched: false,
        },
      }));
      return;
    }

    const isValid = state[name].rule.test(value);
    const errorText = `Wrong format ${name}`;

    setState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        isValid,
        errorText,
      },
    }));
  };

  return [onInputBlur, handleInputChange];
}
