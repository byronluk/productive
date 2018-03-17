import initialState from '../../../initialState';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    
    case 'LOGGED_IN':
      return {
        ...state,
        status: 'LOGGED_IN',
        email: action.email,
        uid: action.uid,
        firstName: action.firstName,
        lastName: action.lastName,
      };

    case 'LOGGED_OUT':
      return initialState.auth;

    default:
      return state;
  }
}
