import { combineReducers } from 'redux';
import signUpReducer from './sign-up';
import logInReducer from './log-in';

const reducer = combineReducers({
  signUp: signUpReducer,
  logIn: logInReducer,
});

export default reducer;
