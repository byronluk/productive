import { connect } from 'react-redux';
import NewHabit from '../components/NewHabit';
import { 
    handleHabitNameInput, 
    selectHabitRecurrence, 
    selectHabitType, 
    handleHabitGoal,
    createNewHabit,
  } from '../actions/new-habit';
import { toggleHabitCreation } from '../actions/home-page';

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
    handleHabitGoalChange(event) {
      dispatch(handleHabitGoal(event.target.value));
    },
    cancelHabitCreation() {
      dispatch(toggleHabitCreation(false));
    },
    createHabit(event) {
      dispatch(createNewHabit(event));
      dispatch(toggleHabitCreation(false));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewHabit);