import initialState from '../initial-state';

export default function homePageReducer(state = initialState.homePage, action) {

  switch (action.type) {

    case 'TOGGLE_TODO':
      return {
        ...state,
        toggleTodos: !state.toggleTodos,
      };
    
    case 'CREATING_HABIT':
    return {
      ...state,
      toggleHabitCreation: action.toggleHabitCreation,
    };

    case 'LOGGED_OUT':
    return initialState.homePage;

    default:
      return state;
  }
}
