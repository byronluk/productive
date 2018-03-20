// @flow

import React from 'react';
import { connect } from 'react-redux';

import NavBar from './common/NavBar';
import AnonymousPage from './AnonymousPage';
import HomePage from './HomePage';

type User = {
  status: ?string,
  email: string,
  photoURL: string,
  firstName: string,
  lastName: string,
  uid: string
};

const App = ({ auth }: { auth: User }) => {
  return (
    <main>
      <NavBar status={auth.status} />
      {!auth.status && <AnonymousPage />}
      {auth.status == 'LOGGED_IN' && <HomePage />}
    </main>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(App);
