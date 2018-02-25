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
    toggleHabitCreation: false,
  },
  
  habits: [],
  
  newHabit: {
    habitName: '',
    habitRecurrence: 'Daily',
    habitType: 'Repetition',
    dailyGoal: 0,
    dailyProgress: 0,
    habitStreak: 0,
  },
};

export default initialState;
