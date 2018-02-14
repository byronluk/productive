export const UpdateSignUpFields = (input, name) => {
  return {
    type: 'UPDATE_SIGNUP_INPUT',
    input,
    name,
  };
};

export const signUpClick = () => {
  return {
    type: 'SIGNUP_CLICK',
  }
}