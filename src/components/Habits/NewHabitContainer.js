// @flow

import { connect } from 'react-redux';
import NewHabit from './NewHabit';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSubmit(values) {
      console.log(values);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewHabit);
