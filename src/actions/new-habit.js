import { database } from '../firebase';

export const handleHabitNameInput = (input) => {
  return {
    type: 'HABIT_NAME_INPUT',
    habitName: input,
  };
};

export const selectHabitRecurrence = (value) => {
  return {
    type: 'HABIT_RECCURENCE',
    habitRecurrence: value,
  };
};

export const selectHabitType = (value) => {
  return {
    type: 'HABIT_TYPE',
    habitType: value,
  };
};

export const handleHabitGoal = (value) => {
  value = parseInt(value);
  return {
    type: 'HABIT_GOALS',
    dailyGoal: value,
  };
};

export const createNewHabit = (event) => {
  event.preventDefault();

  return (dispatch, getState) => {
    const { auth, newHabit } = getState();
    const habitURL = `users/${auth.uid}/habits/`;

    const habitsRef = database.ref(habitURL);
    const habitId = habitsRef.push().key;
    const formattedHabit = formatHabit(newHabit, habitId);

    dispatch({ type: 'CREATING_NEW_HABIT' });
    database.ref(habitURL + habitId).set(formattedHabit);
  };
};

//  helper functions
const formatHabit = (habit, key) => {
  habit.creationDate = getCurrentDate();
  habit.habitId = key;
  
  return habit;
};

const getCurrentDate = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if(dd < 10) {
      dd = '0' + dd;
  } 
  if(mm < 10) {
      mm = '0' + mm;
  } 
  return mm + '/' + dd + '/' + yyyy;
};

