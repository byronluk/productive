import { combineReducers } from 'redux';
import authReducer from './auth/AuthReducer';
// import homePageReducer from './home-page';
// import newHabitReducer from './new-habit';
// import HabitsReducer from './habits';

const reducer = combineReducers({
  auth: authReducer,
});

export default reducer;
