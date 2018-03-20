import { connect } from 'react-redux';
import NewHabit from './NewHabit';

const mapStateToProps = ({ form }) => {
  const { newHabit } = form;
  return { newHabit };
};

export default connect(mapStateToProps)(NewHabit);
