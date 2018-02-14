import React from 'react';

const LogIn = ({ logIn, handleChange, toggleLogIn }) => {
  return (
    <form className="createAccount__form">
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
        onChange={ handleChange }
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={ handleChange }
      />
      <button
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};

export default LogIn;
