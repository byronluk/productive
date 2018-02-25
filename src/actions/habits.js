export const startListeningForHabits = (habit) => {
  return {
    type: 'ADD_HABIT',
    habit,
  };
};

export const startListeningForHabitChanges = () => {

};
