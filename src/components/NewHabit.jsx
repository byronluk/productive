import React from 'react';
import PropTypes from 'prop-types';

const NewHabit = ({ newHabit, handleHabitNameChange }) => {
  return (
    <div>
      <h1>New Habit</h1>
      <input
        type="text"
        placeholder="Add a Habit"
        value={ newHabit.habitName }
        onChange={ handleHabitNameChange }
      />
    </div>
  );
};

NewHabit.propTypes = {
  newHabit: PropTypes.object,
  handleHabitNameChange: PropTypes.func,
};

export default NewHabit;