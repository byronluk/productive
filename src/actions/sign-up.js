export const updateSignUpFields = (input, name) => {
  return {
    type: 'UPDATE_SIGNUP_INPUT',
    input,
    name,
  };
};

export const toggleLogInForm = (toggleLogIn) => {
  return {
    type: 'TOGGLE_LOG_IN_FORM',
    toggleLogIn,
  };
};
