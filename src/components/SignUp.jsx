import React from 'react';
import PropTypes from 'prop-types';

const SignUp = ({ signUp, handleChange, handleClick, toggleLogIn }) => {
  return (
    <form className="createAccount__form" onSubmit={ (e) => e.preventDefault() }>
      <h2>Sign Up</h2>
      <a
        href="#"
        onClick={ () => toggleLogIn(false) }
      >
        or log in to your current account
      </a>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={ signUp.firstName }
        onChange={ handleChange }
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={ signUp.lastName }
        onChange={ handleChange }
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        value={ signUp.email }
        onChange={ handleChange }
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={ signUp.password }
        onChange={ handleChange }
      />
      <button
        type="submit"
        onClick={ handleClick }
      >
        Sign Up
      </button>
    </form>
  );
};

SignUp.propTypes = {
  signUp: PropTypes.object,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  toggleLogIn: PropTypes.func,
};

export default SignUp;
