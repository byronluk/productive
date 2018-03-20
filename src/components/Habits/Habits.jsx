import React from 'react';
import NewHabit from './NewHabitContainer';

const Habits = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#addHabitModal"
      >
        Add Habit
      </button>
      <div
        className="modal fade"
        id="addHabitModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="newHabitModalLabel"
        aria-hidden="true"
      >
        <NewHabit />
      </div>
      <ul>
        {/* {habits.length > 0 &&
          habits.map(habit => {
            return <Habit key={habit.habitId} habit={habit} handleClick={handleProgressChanges} />;
          })} */}
      </ul>
    </div>
  );
};

export default Habits;
