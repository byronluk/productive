const initialState = {
  signUp: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    toggleLogIn: true,
  },
  logIn: {
    email: '',
    password: '',
  },
  auth: {
    status: 'ANONYMOUS',
    email: null,
    photoURL: null,
    uid: null
  },
};

export default initialState;
