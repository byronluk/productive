import initialState from '../initial-state';

export default function newHabitReducer(state = initialState.newHabit, action) {
  switch (action.type) {
    
    case 'HABIT_NAME_INPUT':
      return {
        ...state,
        habitName: action.habitName,
      };

    case 'CREATING_HABIT':
      return {
        ...state,
        toggleHabitCreation: action.toggleHabitCreation,
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

    case 'HABIT_OCCURRENCE':
      return {
        ...state,
        habitOccurrence: action.habitOccurrence,
      };

    case 'CREATING_NEW_HABIT':
      return {
        habitName: '',
        toggleHabitCreation: false,
        habitRecurrence: 'Daily',
        habitType: 'Repetition',
        habitOccurrence: 0,
      };

    default:
      return state;
  }
}