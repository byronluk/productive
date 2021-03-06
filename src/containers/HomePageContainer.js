import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { toggleTodos } from '../actions/home-page';

const mapStateToProps = ({ homePage }) => {
  return { homePage };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodos() {
      dispatch(toggleTodos());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
