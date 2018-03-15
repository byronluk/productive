import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ status }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Productive</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <button className="nav-item btn btn-outline-success" href="#">Sign Up</button>
          <button className="nav-item btn btn-outline-info mx-3" href="#">Log In</button>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  status: PropTypes.string
};

export default NavBar;