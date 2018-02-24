import initialState from '../initial-state';

export default function homePageReducer(state = initialState.homePage, action) {
  const { habits } = state;
  const habitsCopy = habits.slice();

  switch (action.type) {

    case 'TOGGLE_TODO':
      return {
        ...state,
        toggleTodos: !state.toggleTodos,
      };

    case 'ADD_HABIT':
      habitsCopy.push(action.habit);
      return {
        ...state,
        habits: habitsCopy,
      };

      case 'LOGGED_OUT':
      return initialState.homePage;

    default:
      return state;
  }
}