import React from 'react';
import PropTypes from 'prop-types';

const Habits = ({ newHabit, handleHabitNameChange, toggleHabitCreation, habits }) => {
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

      { !!habits && habits.map((habit, index) => {
        
      })}
    </div>
  );
};

Habits.propTypes = {
  newHabit: PropTypes.object,
  habits: PropTypes.array,
  handleHabitNameChange: PropTypes.func,
  toggleHabitCreation: PropTypes.func,
};

export default Habits;