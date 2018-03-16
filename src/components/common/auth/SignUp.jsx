import React from 'react';
import PropTypes from 'prop-types';

const SignUp = () => {
  return (
    <div className="modal-dialog" role="document">
      <form className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title" id="signUpModalLabel">Sign Up</h3>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              name="firstName"
              placeholder="first name"
            />
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              name="lastName"
              placeholder="last name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <input
              required
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
          <button
            type="button"
            className="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

SignUp.propTypes = {
};

export default SignUp;
