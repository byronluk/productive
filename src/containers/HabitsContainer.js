import { connect } from 'react-redux';
import Habits from '../components/Habits';
import { handleHabitNameInput } from '../actions/new-habit';
import { toggleHabitCreation } from '../actions/home-page';
import { incrementDailyProgress } from '../actions/habits';

const mapStateToProps = ({ newHabit, habits }) => {
  return { newHabit, habits };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleHabitNameChange(event) {
      dispatch(handleHabitNameInput(event.target.value));
    },
    toggleHabitCreation() {
      dispatch(toggleHabitCreation(true));
    },
    handleProgressChanges(event) {
      dispatch(incrementDailyProgress(event.target.getAttribute('value')));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Habits);