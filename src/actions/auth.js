import { auth, database, emailAuthProvider } from '../firebase';

export const createAccount = () => {
  return (dispatch) => {
    dispatch({ type: 'CREATE_ACCOUNT' });
  };
};

export const logIn = () => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
  };
};
