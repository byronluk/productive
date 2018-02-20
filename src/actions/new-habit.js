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
  console.log('action dispatched');
  return {
    type: 'HABIT_OCCURRENCE',
    habitOccurrence: value,
  };
};
