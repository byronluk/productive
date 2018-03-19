// @flow

import initialState from '../../../initialState';
import { Action } from '../../types';

type State = {
  status: ?string,
  email: string,
  photoURL: string,
  firstName: string,
  lastName: string,
  uid: string
};

export default function authReducer(
  state: State = initialState.auth,
  action: Action
): State {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        status: 'LOGGED_IN',
        email: action.email,
        uid: action.uid,
        firstName: action.firstName,
        lastName: action.lastName
      };

    case 'LOGGED_OUT':
      return initialState.auth;

    default:
      (action: empty);
      return state;
  }
}
