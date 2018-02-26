import React from 'react';
import PropTypes from 'prop-types';

const Habit = ({ habit, handleClick }) => {
  return (
    <li>
      { habit.habitName }
      <span value={ habit.habitId } onClick={ handleClick }>
        Plus button here
      </span>
    </li>
  );
};

Habit.propTypes = {
  habit: PropTypes.object,
  handleClick: PropTypes.func,
};

export default Habit;
