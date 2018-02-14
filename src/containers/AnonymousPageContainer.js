import { connect } from 'react-redux';
import AnonymousPage from '../components/AnonymousPage';
import { updateSignUpFields, signUpClick, toggleLogInForm } from '../actions/sign-up';
import { updateLogInFields } from '../actions/log-in';

const mapStoreToProps = ({ signUp, logIn }) => {
  return { signUp, logIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignUpChange(event) {
      const { target } = event;
      dispatch(updateSignUpFields(target.value, target.name));
    },
    toggleLogIn(toggleLogIn) {
      dispatch(toggleLogInForm(toggleLogIn));
    },
    handleLogInChange(event) {
      const { target } = event;
      dispatch(updateLogInFields(target.value, target.name));
    },
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(AnonymousPage);
