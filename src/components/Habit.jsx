import React from 'react';
import PropTypes from 'prop-types';

const Habit = ({ habit }) => {
  return (
    <li>
      { habit.habitName }
      <span onClick={ () => console.log(habit.habitId) }>
        Plus button here
      </span>
    </li>
  );
};

Habit.propTypes = {
  habit: PropTypes.object,
};

export default Habit;