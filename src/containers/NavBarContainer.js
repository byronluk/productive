import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { logOut } from '../actions/auth';

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOutClick() {
      dispatch(logOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);