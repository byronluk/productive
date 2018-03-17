import { connect } from 'react-redux';
import SignUp from './SignUp';
import { createAccount } from './AuthActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(values) {
      dispatch(createAccount(values));
    }
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
