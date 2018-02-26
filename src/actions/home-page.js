export const toggleTodos = () => {
  return {
    type: 'TOGGLE_TODO',
  };
};

export const toggleHabitCreation = (toggle) => {
  return {
    type: 'CREATING_HABIT',
    toggleHabitCreation: toggle,
  };
};
