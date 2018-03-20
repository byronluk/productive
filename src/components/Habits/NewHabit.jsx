// @flow
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form';

let NewHabit = ({ handleSubmit }: FormProps) => {
  return (
    <div className="modal-dialog" role="document">
      <form className="modal-content" onSubmit={handleSubmit}>
        <div className="modal-header">
          <h5 className="modal-title" id="addHabitModalLabel">
            New Habit
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
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

          <div className="form-group">
            <div className="btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <input type="radio" autoComplete="off" value="Daily" />
                Daily
              </label>
              <label className="btn btn-secondary">
                <input type="radio" autoComplete="off" value="Weekly" />
                Weekly
              </label>
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
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
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
