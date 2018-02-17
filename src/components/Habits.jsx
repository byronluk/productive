import React from 'react';
import PropTypes from 'prop-types';

const Habits = ({ newHabit, handleHabitNameChange, toggleHabitCreation }) => {
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
    </div>
  );
};

Habits.propTypes = {
  newHabit: PropTypes.object,
  handleHabitNameChange: PropTypes.func,
  toggleHabitCreation: PropTypes.func,
};

export default Habits;