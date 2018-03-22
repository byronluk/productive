// @flow
import React from 'react';
import { Field, reduxForm } from 'redux-form';
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
                className="btn btn-outline-dark btn-block col-5 border-0 active"
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
            {/* add values for daily or weekly inside of accordion form */}
            <div id="accordion">
              <div className="collapse show" id="dailySelectCollapse" data-parent="#accordion">
                <Field name="daily" component={DailySelector} />
              </div>
              <div className="collapse" id="weeklySelectCollapse" data-parent="#accordion">
                <div className="card card-body">Weeks</div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <p>Form group</p>
          </div>
          {/* add in options to select which days */}

          <div className="form-group">
            <div className="btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <input type="radio" autoComplete="off" value="Daily" />
                Repetition
              </label>
              <label className="btn btn-secondary">
                <input type="radio" autoComplete="off" value="Weekly" />
                Duration
              </label>
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

NewHabit = reduxForm({
  form: 'newHabit'
})(NewHabit);

export default NewHabit;
