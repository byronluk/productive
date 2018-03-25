// @flow
import React from 'react';
import { Field, Fields, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form';
import DailySelector from './DailySelector';

let NewHabit = ({ handleSubmit }: FormProps) => {
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
            <div className="btn-group-toggle row justify-content-around mb-4" data-toggle="buttons">
              <label
                className="btn btn-outline-dark btn-block col-5 border-0 collapsed"
                data-toggle="collapse"
                data-target="#dailySelectCollapse"
                role="button"
                aria-expanded="false"
                aria-controls="dailySelectCollapse"
              >
                <input type="radio" autoComplete="off" />
                Daily
              </label>
              <span className="lead">or</span>
              <label
                className="btn btn-outline-dark btn-block col-5 border-0 my-0 collapsed"
                data-toggle="collapse"
                data-target="#weeklySelectCollapse"
                role="button"
                aria-expanded="false"
                aria-controls="weeklySelectCollapse"
              >
                <input type="radio" autoComplete="off" />
                Weekly
              </label>
            </div>
            <div id="accordion">
              <div className="collapse" id="dailySelectCollapse" data-parent="#accordion">
                <Fields
                  names={['day.M', 'day.T', 'day.W', 'day.Th', 'day.F', 'day.S', 'day.Su']}
                  component={DailySelector}
                />
              </div>
              <div className="collapse" id="weeklySelectCollapse" data-parent="#accordion">
                <div className="card card-body">Weeks</div>
              </div>
            </div>
          </div>
          <div className="dropdown-divider my-3" />
          <div className="form-group">
            <div className="btn-group-toggle row justify-content-around mb-4" data-toggle="buttons">
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
              <div className="col-5 collapse" id="setMultipleCollapse">
                <input className="form-control ml-2 w-25" type="number" />
              </div>
              <div className="col-5 collapse" id="setDurationCollapse">
                <input className="form-control ml-2 w-25" type="number" />
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
};
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
