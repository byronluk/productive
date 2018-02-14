import { auth, database } from '../firebase';

export const createAccount = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'CREATING_ACCOUNT' });
    const { firstName, lastName, email, password } = getState().signUp;
     auth
      .createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then((user) => {
        database.ref('users/' + user.user.uid).set({
          info: {
            firstName,
            lastName,
            email,
          }
        });
      });
  };
};

export const logIn = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    const { email, password } = getState().logIn;
    auth
      .signInWithEmailAndPassword(email, password);
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth
      .signOut();
  };
};

export const loggedIn = (user, info) => {
  return {
    type: 'LOGGED_IN',
    email: user.email,
    uid: user.uid,
    firstName: info.firstName,
    lastName: info.lastName,
  };
};

export const loggedOut = () => {
  return {
    type: 'LOGGED_OUT'
  };
};

export const startListeningToAuthChanges = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        database.ref('users/' + user.uid + '/info/').once('value').then((snapshot) => {
          dispatch(loggedIn(user, snapshot.val()));
        });
      } else {
        dispatch(loggedOut());      
      }
    });
  };
};