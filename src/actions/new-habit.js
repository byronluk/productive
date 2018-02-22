import { database } from '../firebase';

export const handleHabitNameInput = (input) => {
  return {
    type: 'HABIT_NAME_INPUT',
    habitName: input,
  };
};

export const toggleHabitCreation = (toggle) => {
  return {
    type: 'CREATING_HABIT',
    toggleHabitCreation: toggle,
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

export const handleHabitOccurrence = (value) => {
  return {
    type: 'HABIT_OCCURRENCE',
    habitOccurrence: value,
  };
};

export const createNewHabit = (event) => {
  event.preventDefault();

  return (dispatch, getState) => {
    const { auth, newHabit } = getState();
    const formattedHabit = formatHabit(newHabit);

    dispatch({ type: 'CREATING_NEW_HABIT' });
    database.ref('users/' + auth.uid + '/habits/').push(formattedHabit);
  };
};

const formatHabit = (habit) => {
  delete habit.toggleHabitCreation;
  habit.creationDate = getCurrentDate();
  habit.currentStreak = 0;
  
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

