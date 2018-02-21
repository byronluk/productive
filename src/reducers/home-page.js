import initialState from '../initial-state';

export default function homePageReducer(state = initialState.homePage, action) {
  switch (action.type) {

    case 'TOGGLE_TODO':
      return {
        toggleTodos: !state.toggleTodos,
      };

    default:
      return state;
  }
}