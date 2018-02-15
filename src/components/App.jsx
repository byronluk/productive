import React from 'react';
import PropTypes from 'prop-types';

import AnonymousPage from '../containers/AnonymousPageContainer';
import HomePage from '../containers/HomePageContainer';

const App = ({ auth }) => {
  return (
    <main>
      { auth.status == 'ANONYMOUS' && <AnonymousPage /> }
      { auth.status == 'LOGGED_IN' && <HomePage /> }
    </main>
  );
};

App.propTypes = {
  auth: PropTypes.object,
};

export default App;
