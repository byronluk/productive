import { connect } from 'react-redux';
import NewHabit from '../components/NewHabit';
import { 
    handleHabitNameInput, 
    selectHabitRecurrence, 
    selectHabitType, 
    handleHabitOccurrence,
  } from '../actions/new-habit';

const mapStateToProps = ({ newHabit }) => {
  return { newHabit };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleHabitNameChange(event) {
      dispatch(handleHabitNameInput(event.target.value));
    },
    selectHabitRecurrence(event) {
      dispatch(selectHabitRecurrence(event.target.value));
    },
    selectHabitType(event) {
      dispatch(selectHabitType(event.target.value));
    },
    handleHabitOccurrence(event) {
      dispatch(handleHabitOccurrence(event.target.value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewHabit);