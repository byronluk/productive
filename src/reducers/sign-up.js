import initialState from '../initial-state';

export default function signUpReducer(state = initialState.signUp, action) {
  switch (action.type) {
    case 'UPDATE_SIGNUP_INPUT':
      return {
        ...state,
        [[action.name]]: action.input,
      };

    case 'TOGGLE_LOG_IN_FORM':
      return {
        ...state,
        toggleLogIn: action.toggleLogIn,
      };

    case 'LOGGED_IN':
      return {
        ...state,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };

    default: 
      return state;
  }
}
