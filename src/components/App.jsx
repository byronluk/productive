import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './common/NavBar';
import AnonymousPage from './AnonymousPage';
// import HomePage from '../containers/HomePageContainer';

const App = ({ auth }) => {
  return (
    <main>
      <NavBar status={auth.status} />
      { !auth.status && <AnonymousPage /> }
      {/* { auth.status == 'LOGGED_IN' && <HomePage /> } */}
    </main>
  );
};

App.propTypes = {
  auth: PropTypes.object,
};

export default App;
