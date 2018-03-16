import React from 'react';
import PropTypes from 'prop-types';

const LogIn = () => {
  return (
    <div className="modal-dialog" role="document">
      <form className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title" id="logInModalLabel">Log In</h3>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
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
            className="btn btn-primary">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

LogIn.propTypes = {
};

export default LogIn;
