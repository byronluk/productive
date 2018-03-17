import { auth, database } from '../../../firebase';
// import { startListeningForHabits } from './habits';

export const createAccount = (values) => {
  return (dispatch) => {
    const { firstName, lastName, email, password } = values;
    dispatch({ type: 'CREATING_ACCOUNT' });
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

export const logIn = (values) => {
  return (dispatch) => {
    const { email, password } = values;
    dispatch({ type: 'ATTEMPTING_LOGIN' });
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
        const userURL = `users/${user.uid}`;

        database.ref(userURL + '/info/').once('value').then((snapshot) => {
          dispatch(loggedIn(user, snapshot.val()));
        });
        // database.ref(userURL + '/habits/').on('child_added', (snapshot) => {
        //   dispatch(startListeningForHabits(snapshot.val()));
        // });
      } else {
        dispatch(loggedOut());      
      }
    });
  };
};