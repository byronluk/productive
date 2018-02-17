import initialState from '../initial-state';

export default function newHabitReducer(state = initialState.newHabit, action) {
  switch (action.type) {
    case 'HABIT_NAME_INPUT': {
      return {
        ...state,
        habitName: action.habitName,
      };
    }

    case 'CREATING_HABIT': {
      return {
        ...state,
        toggleHabitCreation: action.toggleHabitCreation,
      };
    }

    default: {
      return state;
    }
  }
}