import { combineReducers } from 'redux';
import signUpReducer from './sign-up';

const reducer = combineReducers({
  signUp: signUpReducer,
});

export default reducer;
