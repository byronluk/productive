import { connect } from 'react-redux';
import Habits from '../components/Habits';
import { handleHabitNameInput } from '../actions/new-habit';
import { toggleHabitCreation } from '../actions/home-page';

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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Habits);