/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './rootReducer';
import initialState from  './initialState';
import App from './components/App';

import { startListeningToAuthChanges } from './components/common/auth/AuthActions';
// import { startListeningForHabitChanges } from './actions/home-page';

const middleware = [ promiseMiddleware(), thunk ];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  )
);

store.dispatch(startListeningToAuthChanges());

ReactDOM.render(
  <Provider store={store}>
    <App auth={store.getState().auth} />
  </Provider>,
  document.getElementById('root')
);
