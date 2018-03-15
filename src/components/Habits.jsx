import React from 'react';
import PropTypes from 'prop-types';
import Habit from './Habit';

const Habits = ({ habits, newHabit, handleProgressChanges, handleHabitNameChange, toggleHabitCreation }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a Habit"
        value={ newHabit.habitName }
        onChange={ handleHabitNameChange }
      />
      <button
        onClick={ toggleHabitCreation }
      >
        Add Habit
      </button>
      <ul>
        { habits.length > 0 && habits.map((habit) => {
          return (
            <Habit key={ habit.habitId } habit={ habit } handleClick={ handleProgressChanges } />
          );
        })}
      </ul>
    </div>
  );
};

Habits.propTypes = {
  newHabit: PropTypes.object,
  habits: PropTypes.array,
  handleHabitNameChange: PropTypes.func,
  toggleHabitCreation: PropTypes.func,
  handleProgressChanges: PropTypes.func,
};

export default Habits;