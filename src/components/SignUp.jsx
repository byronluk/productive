import React from 'react';
import PropTypes from 'prop-types';

const SignUp = ({ handleChange }) => {
  return (
    <form className="createAccount__form">
      <input type="text" name="firstName" onChange={ handleChange } />
      <input type="text" name="lastName" onChange={ handleChange } />
      <input type="text" name="email" onChange={ handleChange } />
      <input type="text" name="password" onChange={ handleChange } />
      <button type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
