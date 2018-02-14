import React from 'react';
import PropTypes from 'prop-types';

import AnonymousPage from '../containers/AnonymousPageContainer';
import homePage from '../containers/homePageContainer';

const App = ({ auth }) => {
  return (
    <main>
      { auth.status == 'ANONYMOUS' && <AnonymousPage /> }
      { auth.status == 'LOGGED_IN' && <homePage /> }
    </main>
  );
};

App.propTypes = {
  auth: PropTypes.object,
};

export default App;
