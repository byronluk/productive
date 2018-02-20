import React from 'react';
import PropTypes from 'prop-types';

const NewHabit = ({ 
  newHabit,
  handleHabitNameChange,
  selectHabitRecurrence,
  selectHabitType,
  handleHabitOccurrence }) => {

  return (
    <form>
      <h1>New Habit</h1>
      <input
        type="text"
        placeholder="Add a Habit"
        value={ newHabit.habitName }
        onChange={ handleHabitNameChange }
      />

      <input
        type="button"
        value="Daily"
        onClick={ selectHabitRecurrence }
      />
      <input
        type="button"
        value="Weekly"
        onClick={ selectHabitRecurrence }
      />
      {/* add in options to select which days */}

      <input
        type="button"
        value="Repetition"
        onClick={ selectHabitType }
      />
      <input
        type="button"
        value="Duration"
        onClick={ selectHabitType }
      />

      <input
        type="number"
        placeholder="How many times a day?"
        value={ newHabit.habitOccurrence }
        onChange={ handleHabitOccurrence }
      />
      {/* ^or how many hours/minutes a day? */}
      <button type="submit">
        Create Habit
      </button>
    </form>
  );
};

NewHabit.propTypes = {
  newHabit: PropTypes.object,
  handleHabitNameChange: PropTypes.func,
  selectHabitRecurrence: PropTypes.func,
  selectHabitType: PropTypes.func,
  handleHabitOccurrence: PropTypes.func,
};

export default NewHabit;