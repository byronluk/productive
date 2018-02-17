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
