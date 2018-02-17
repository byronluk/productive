import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../containers/NavBarContainer';
import Habits from '../containers/HabitsContainer';
import NewHabit from '../containers/NewHabitContainer';
import Todos from './Todos';

const HomePage = ({ homePage, newHabit, toggleTodos }) => {
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
        { newHabit.toggleHabitCreation && <NewHabit /> }
      </div>
    </main>
  );
};

HomePage.propTypes = {
  homePage: PropTypes.object,
  newHabit: PropTypes.object,
  toggleTodos: PropTypes.func,
};

export default HomePage;