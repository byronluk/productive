// @flow

const initialState = {
  auth: {
    status: null,
    email: '',
    photoURL: '',
    firstName: '',
    lastName: '',
    uid: ''
  },

  homePage: {
    toggleTodos: false,
    toggleHabitCreation: false
  },

  habits: [],

  newHabit: {
    habitName: '',
    habitRecurrence: 'Daily',
    habitType: 'Repetition',
    dailyGoal: 0,
    dailyProgress: 0,
    habitStreak: 0
  }
};

export default initialState;
