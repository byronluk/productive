import initialState from '../initial-state';

export default function signUpReducer(state = initialState.logIn, action) {
  switch (action.type) {
    case 'UPDATE_LOG_IN_INPUT':
      return {
        ...state,
        [[action.name]]: action.input,
      };
    
    case 'LOGGED_IN':
      return initialState.logIn;

    default:
      return state;
  }
}
