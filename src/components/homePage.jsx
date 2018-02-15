import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../containers/NavBarContainer';
import Habits from './Habits';
import Todos from './Todos';

const HomePage = ({ homePage, toggleTodos }) => {
  return (
    <main>
      <NavBar />
      <div>
        <button onClick={ toggleTodos } disabled={ !homePage.toggleTodos && true }>Habits</button>
        <button onClick={ toggleTodos } disabled={ homePage.toggleTodos && true }>Todos</button> 
        { homePage.toggleTodos
          ? <Todos />
          : <Habits />
        }
      </div>
    </main>
  );
};

HomePage.propTypes = {
  homePage: PropTypes.object,
  toggleTodos: PropTypes.func,
};

export default HomePage;