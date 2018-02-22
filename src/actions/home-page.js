// import { database } from '../firebase';

export const toggleTodos = () => {
  return {
    type: 'TOGGLE_TODO',
  };
};

export const startListeningForHabits = (habit) => {
  return {
    type: 'ADD_HABIT',
    habit,
  };
};

export const startListeningForHabitChanges = () => {

};
