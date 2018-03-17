import { connect } from 'react-redux';
import LogIn from './LogIn';
import { logIn } from './AuthActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(values) {
      dispatch(logIn(values));
    }
  };
};

export default connect(null, mapDispatchToProps)(LogIn);
