const initialState = {
  signUp: {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  },
  logIn: {
    email: null,
    password: null,
  },
  auth: {
    status: 'ANONYMOUS',
    email: null,
    photoURL: null,
    uid: null
  },
};

export default initialState;
