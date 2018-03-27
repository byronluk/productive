// @flow

import { connect } from 'react-redux';
import { change } from 'redux-form';
import NewHabit from './NewHabit';

const mapStateToProps = () => {
  return {
    initialValues: {
      habitType: 'daily',
      day: { Su: true, M: true, T: true, W: true, Th: true, F: true, S: true }
    }
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSubmit(values) {
      console.log(values);
    },
    toggleDays(type) {
      const days = {
        Su: false,
        M: true,
        T: true,
        W: true,
        Th: true,
        F: true,
        S: false
      };
      if (type === 'weekends') {
        // change values in days so weekends are true
        for (let day in days) {
          if (day === 'Su' || day === 'S') {
            days[day] = true;
          } else {
            days[day] = false;
          }
        }
      }
      dispatch(change('newHabit', 'day', days));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewHabit);
