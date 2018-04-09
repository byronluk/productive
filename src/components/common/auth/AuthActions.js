// @flow

import { auth, database } from '../../../firebase';
import type { user, Action, ThunkAction } from '../../types';
import { reset } from 'redux-form';
// import { startListeningForHabits } from './habits';

export const createAccount = (values: user): ThunkAction => {
  return dispatch => {
    const { firstName, lastName, email, password } = values;
    dispatch({ type: 'CREATING_ACCOUNT' });
    auth.createUserAndRetrieveDataWithEmailAndPassword(email, password).then(user => {
      database.ref('users/' + user.user.uid).set({
        info: {
          firstName,
          lastName,
          email
        }
      });
      dispatch(reset('signup'));
    });
  };
};

export const logIn = (values: { email: string, password: string }): ThunkAction => {
  return dispatch => {
    const { email, password } = values;
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signInWithEmailAndPassword(email, password);
  };
};

export const logOut = (): ThunkAction => {
  return dispatch => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signOut();
  };
};

export const loggedIn = (
  user: { email: string, uid: string },
  info: { firstName: string, lastName: string }
): ThunkAction => {
  $('#signUpModal, #logInModal').modal('hide');
  return dispatch => {
    dispatch({
      type: 'LOGGED_IN',
      email: user.email,
      uid: user.uid,
      firstName: info.firstName,
      lastName: info.lastName
    });
    dispatch(reset('login'));
  };
};

export const loggedOut = (): Action => {
  return {
    type: 'LOGGED_OUT'
  };
};

export const startListeningToAuthChanges = (): ThunkAction => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const userURL = `users/${user.uid}`;

        database
          .ref(userURL + '/info/')
          .once('value')
          .then(snapshot => {
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
