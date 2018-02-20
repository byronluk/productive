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
  },
  newHabit: {
    habitName: '',
    toggleHabitCreation: false,
    habitRecurrence: 'Daily',
    habitType: 'Repetition',
    habitOccurrence: 0,
  },
};

export default initialState;
