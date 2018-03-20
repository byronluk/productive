import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './components/common/auth/AuthReducer';
// import homePageReducer from './home-page';
// import newHabitReducer from './new-habit';
// import HabitsReducer from './habits';

const reducer = combineReducers({
  auth: authReducer,
  form: formReducer.plugin(
    {
      login: (state, action) => {
        switch (action.type) {
          case 'LOGGED_IN': {
            return undefined;
          }
          default:
            return state;
        }
      }
    },
    {
      signup: (state, action) => {
        switch (action.type) {
          case 'LOGGED_IN': {
            return undefined;
          }
          default:
            return state;
        }
      }
    }
  )
});

export default reducer;
