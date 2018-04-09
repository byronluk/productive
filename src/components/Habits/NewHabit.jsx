// @flow
import React from 'react';
import { Field, Fields, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form';
import DailySelector from './DailySelector';
import WeeklySelector from './WeeklySelector';

// TODO: rewrite component to not rely on redux form

type Props = {
  ...FormProps,
  onSubmit: () => void,
  toggleDays: () => void
};
type State = {
  habitType: string
};

class NewHabit extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      habitType: 'daily'
    };
  }

  habitTypeClick = (event): void => {
    const { value } = event.target;
    if (this.state.habitType === value) {
      return;
    }
    this.setState({
      habitType: value
    });
  };

  render() {
    const { handleSubmit, toggleDays } = this.props;
    const { habitType } = this.state;
    return (
      <div className="modal-dialog" role="document">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title" id="addHabitModalLabel">
              New Habit
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <Field
                name="habitName"
                component="input"
                type="text"
                className="form-control"
                placeholder="habit name"
              />
            </div>
            <div className="form-group container">
              <p className="lead text-center">I want to repeat this habit</p>
              <div className="btn-group-toggle row justify-content-around mb-4">
                <label
                  className={`btn btn-outline-dark btn-block col-5 border-0' 
                    ${habitType === 'daily' ? 'active' : ''}`}
                  data-toggle="collapse"
                  data-target="#dailySelectCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="dailySelectCollapse"
                >
                  <Field
                    component="input"
                    type="radio"
                    name="habitType"
                    value="daily"
                    autoComplete="off"
                    onClick={this.habitTypeClick}
                  />
                  Daily
                </label>
                <span className="lead">or</span>
                <label
                  className={`btn btn-outline-dark btn-block col-5 border-0 my-0 
                    ${habitType === 'weekly' ? 'active' : ''}`}
                  data-toggle="collapse"
                  data-target="#weeklySelectCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="weeklySelectCollapse"
                >
                  <Field
                    component="input"
                    type="radio"
                    name="habitType"
                    value="weekly"
                    autoComplete="off"
                    onClick={this.habitTypeClick}
                  />
                  Weekly
                </label>
              </div>
              <div id="accordion">
                <div className="collapse show" id="dailySelectCollapse" data-parent="#accordion">
                  <Fields
                    names={['day.M', 'day.T', 'day.W', 'day.Th', 'day.F', 'day.S', 'day.Su']}
                    component={DailySelector}
                    toggleDays={toggleDays}
                  />
                </div>
                <div className="collapse" id="weeklySelectCollapse" data-parent="#accordion">
                  <Fields names={['week', 'biweekly']} component={WeeklySelector} />
                </div>
              </div>
            </div>
            <div className="dropdown-divider my-3" />
            <div className="form-group">
              <div
                className="btn-group-toggle row justify-content-around mb-4"
                data-toggle="buttons"
              >
                <label
                  className="btn btn-outline-dark btn-block col-5 border-0"
                  data-toggle="collapse"
                  data-target="#setMultipleCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="setMultipleCollapse"
                >
                  <input type="checkbox" autoComplete="off" />
                  Set Multiple
                </label>
                <label
                  className="btn btn-outline-dark btn-block col-5 border-0 my-0 collapsed"
                  data-toggle="collapse"
                  data-target="#setDurationCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="setDurationCollapse"
                >
                  <input type="checkbox" autoComplete="off" />
                  Set Duration
                </label>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="collapse" id="setMultipleCollapse">
                    <input className="form-control ml-2 w-25" type="number" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="collapse" id="setDurationCollapse">
                    <input className="form-control ml-2 w-25" type="number" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Create Habit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
/* add text for what type of habit I am going to create
 * e.g. I want to medidate 
 * 3 times daily
 * on Sunday, Monday, and Tuesday
 * for 2 hours each rep. 
 * habit name -- daily -- days in week -- repetition && duration
 */

NewHabit = reduxForm({
  form: 'newHabit'
})(NewHabit);

export default NewHabit;
