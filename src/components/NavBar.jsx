import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ auth, logOutClick }) => {
  return (
    <nav>
      <h1>{ auth.firstName }</h1>
      <button
        onClick={ logOutClick }
      >
        Log out
      </button>
    </nav>
  );
};

NavBar.propTypes = {
  auth: PropTypes.object,
  logOutClick: PropTypes.func,
};

export default NavBar;