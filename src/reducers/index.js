import { combineReducers } from 'redux';
import signUpReducer from './sign-up';
import logInReducer from './log-in';
import authReducer from './auth';
import homePageReducer from './home-page';

const reducer = combineReducers({
  signUp: signUpReducer,
  logIn: logInReducer,
  auth: authReducer,
  homePage: homePageReducer,
});

export default reducer;
