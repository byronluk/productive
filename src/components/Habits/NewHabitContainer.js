// @flow

import { connect } from 'react-redux';
import NewHabit from './NewHabit';

const mapStateToProps = () => {
  return {
    initialValues: { day: { Su: true, M: true, T: true, W: true, Th: true, F: true, S: true } }
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSubmit(values) {
      console.log(values);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewHabit);
