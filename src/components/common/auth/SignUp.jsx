// @flow

import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SignUp = ({ handleSubmit }) => {
  return (
    <div className="modal-dialog" role="document">
      <form className="modal-content" onSubmit={handleSubmit}>
        <div className="modal-header">
          <h3 className="modal-title" id="signUpModalLabel">
            Sign Up
          </h3>
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
              required
              component="input"
              type="text"
              className="form-control"
              name="firstName"
              placeholder="first name"
            />
          </div>
          <div className="form-group">
            <Field
              required
              component="input"
              type="text"
              className="form-control"
              name="lastName"
              placeholder="last name"
            />
          </div>
          <div className="form-group">
            <Field
              required
              component="input"
              type="email"
              name="email"
              className="form-control"
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <Field
              required
              component="input"
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
            />
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
          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

SignUp = reduxForm({
  form: 'signup'
})(SignUp);

export default SignUp;
