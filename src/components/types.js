// @flow
'use strict';

export type user = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
};

export type Action =
  | { type: 'LOGGED_IN', ...user, uid: string }
  | { type: 'LOGGED_OUT' }
  | { type: 'ATTEMPTING_LOGIN' }
  | { type: 'CREATING_ACCOUNT' };

export type FormAction = (form: string) => any;

export type Dispatch = (action: Action | ThunkAction | PromiseAction | FormAction) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;
