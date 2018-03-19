'use strict';

type ParseObject = Object;

export type user = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
};

export type Action =
  | { type: 'LOGGED_IN', ...userInformation, ...userCredentials }
  | { type: 'LOGGED_OUT' }
  | { type: 'ATTEMPTING_LOGIN' }
  | { type: 'CREATING_ACCOUNT' };

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;
