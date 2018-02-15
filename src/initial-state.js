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
    firstName: null,
    lastName: null,
    uid: null
  },
  homePage: {
    toggleTodos: false,
  }
};

export default initialState;
