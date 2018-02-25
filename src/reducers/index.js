import { combineReducers } from 'redux';
import signUpReducer from './sign-up';
import logInReducer from './log-in';
import authReducer from './auth';
import homePageReducer from './home-page';
import newHabitReducer from './new-habit';
import HabitsReducer from './habits';

const reducer = combineReducers({
  signUp: signUpReducer,
  logIn: logInReducer,
  auth: authReducer,
  homePage: homePageReducer,
  newHabit: newHabitReducer,
  habits: HabitsReducer,
});

export default reducer;
