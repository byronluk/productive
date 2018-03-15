import React from 'react';
import PropTypes from 'prop-types';

const LogIn = ({ logIn, handleChange, handleClick, toggleLogIn }) => {
  return (
    <form className="createAccount__form" onSubmit={ (e) => e.preventDefault() }>
      <h2>Log In</h2>
      <a
        href="#"
        onClick={ () => toggleLogIn(true) }
      >
      or sign up and create an account
      </a>
      <input
        type="text"
        name="email"
        placeholder="email"
        value={ logIn.email }
        onChange={ handleChange }
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={ logIn.password }
        onChange={ handleChange }
      />
      <button
        type="submit"
        onClick={ handleClick }
      >
        Log In
      </button>
    </form>
  );
};

LogIn.propTypes = {
  logIn: PropTypes.object,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  toggleLogIn: PropTypes.func,
};

export default LogIn;
