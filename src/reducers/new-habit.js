import initialState from '../initial-state';

export default function newHabitReducer(state = initialState.newHabit, action) {
  switch (action.type) {
    
    case 'HABIT_NAME_INPUT':
      return {
        ...state,
        habitName: action.habitName,
      };

    case 'HABIT_RECCURENCE':
      return {
        ...state,
        habitRecurrence: action.habitRecurrence,
      };

    case 'HABIT_TYPE':
      return {
        ...state,
        habitType: action.habitType,
      };

    case 'HABIT_GOALS':
      return {
        ...state,
        dailyGoal: action.dailyGoal,
      };

    case 'CREATING_NEW_HABIT':
      return initialState.newHabit;

    default:
      return state;
  }
}