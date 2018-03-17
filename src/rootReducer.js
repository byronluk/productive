import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './components/common/auth/AuthReducer';
// import homePageReducer from './home-page';
// import newHabitReducer from './new-habit';
// import HabitsReducer from './habits';

const reducer = combineReducers({
  auth: authReducer,
  form: formReducer
});

export default reducer;
