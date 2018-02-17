import { connect } from 'react-redux';
import NewHabit from '../components/NewHabit';
import { handleHabitNameInput } from '../actions/new-habit';

const mapStateToProps = ({ newHabit }) => {
  return { newHabit };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleHabitNameChange(event) {
      dispatch(handleHabitNameInput(event.target.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewHabit);