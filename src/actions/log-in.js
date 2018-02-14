export const updateLogInFields = (input, name) => {
  return {
    type: 'UPDATE_LOG_IN_INPUT',
    input,
    name,
  };
};

export const signUpClick = () => {
  return {
    type: 'LOG_IN_CLICK',
  };
};
