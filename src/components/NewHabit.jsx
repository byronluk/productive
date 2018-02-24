import React from 'react';
import PropTypes from 'prop-types';

const NewHabit = ({ 
  newHabit,
  handleHabitNameChange,
  selectHabitRecurrence,
  selectHabitType,
  handleHabitGoalChange,
  cancelHabitCreation,
  createHabit,
 }) => {

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
        value={ newHabit.dailyGoal }
        onChange={ handleHabitGoalChange }
      />
      {/* ^or how many hours/minutes a day? */}
      <input
        type="button"
        value="Cancel"
        onClick={ cancelHabitCreation }
      />
      <button
        type="submit"
        onClick={ createHabit }
      >
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
  handleHabitGoalChange: PropTypes.func,
  cancelHabitCreation: PropTypes.func,
  createHabit: PropTypes.func,
};

export default NewHabit;