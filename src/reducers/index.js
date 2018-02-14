import { combineReducers } from 'redux';
import signUpReducer from './sign-up';
import logInReducer from './log-in';
import authReducer from './auth';

const reducer = combineReducers({
  signUp: signUpReducer,
  logIn: logInReducer,
  auth: authReducer,
});

export default reducer;
