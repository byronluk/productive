// @flow

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form';

let LogIn = ({ handleSubmit }: FormProps) => {
  return (
    <div className="modal-dialog" role="document">
      <form className="modal-content" onSubmit={handleSubmit}>
        <div className="modal-header">
          <h3 className="modal-title" id="logInModalLabel">
            Log In
          </h3>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <Field required component="input" type="email" name="email" className="form-control" placeholder="email" />
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
          <button type="button" className="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default (LogIn = reduxForm({
  form: 'login'
})(LogIn));
