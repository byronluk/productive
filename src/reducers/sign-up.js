import initialState from '../initial-state';

export default function signUpReducer(state = initialState.signUp, action) {
  switch (action.type) {
    case 'UPDATE_SIGNUP_INPUT': {
      return {
        ...state,
        [[action.name]]: action.input,
      };
    }
    default: {
      return state;
    }
  }
}
