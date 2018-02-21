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

export const createHabit = (event) => {
  event.preventDefault();
  return {

  };
};

