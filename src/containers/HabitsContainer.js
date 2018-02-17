import { connect } from 'react-redux';
import Habits from '../components/Habits';
import { handleHabitNameInput, toggleHabitCreation } from '../actions/new-habit';

const mapStateToProps = ({ newHabit }) => {
  return { newHabit };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleHabitNameChange(event) {
      dispatch(handleHabitNameInput(event.target.value));
    },
    toggleHabitCreation() {
      dispatch(toggleHabitCreation(true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Habits);