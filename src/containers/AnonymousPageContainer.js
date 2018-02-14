import { connect } from 'react-redux';
import AnonymousPage from '../components/AnonymousPage';
import { updateSignUpFields, signUpClick } from '../actions/sign-up';

const mapStoreToProps = ({ signUp }) => {
  return { signUp };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(event) {
      const { target } = event;
      console.log(1);
      dispatch(updateSignUpFields(target.value, target.name));
    }
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(AnonymousPage);
