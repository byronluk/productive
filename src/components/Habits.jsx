import React from 'react';
import PropTypes from 'prop-types';

const Habits = ({ newHabit, handleHabitNameChange, toggleHabitCreation, currentHabits }) => {
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
        { currentHabits.length > 0 && currentHabits.map((habit) => {
          return (
            <li key={ habit.habitId }>{ habit.habitName }</li>
          );
        })}
      </ul>
    </div>
  );
};

Habits.propTypes = {
  newHabit: PropTypes.object,
  currentHabits: PropTypes.array,
  handleHabitNameChange: PropTypes.func,
  toggleHabitCreation: PropTypes.func,
};

export default Habits;