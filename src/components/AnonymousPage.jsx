import React from 'react';
import PropTypes from 'prop-types';

import SignUp from './SignUp';
import LogIn from './LogIn';

const AnonymousPage = ({ signUp, logIn, toggleLogIn, handleSignUpChange, signUpClick, handleLogInChange, logInClick }) => {
  return (
    <div>
      { signUp.toggleLogIn
        ? <SignUp
          signUp={ signUp }
          handleClick={ signUpClick }
          handleChange={ handleSignUpChange }
          toggleLogIn={ toggleLogIn }
        />
        : <LogIn
          logIn={ logIn }
          handleClick= { logInClick }
          handleChange={ handleLogInChange }
          toggleLogIn={ toggleLogIn }
        />
      }
    </div>
  );
};

AnonymousPage.propTypes = {
  signUp: PropTypes.object,
  logIn: PropTypes.object,
  toggleLogIn: PropTypes.func,
  handleSignUpChange: PropTypes.func,
  signUpClick: PropTypes.func,
  handleLogInChange: PropTypes.func,
  logInClick: PropTypes.func,
};

export default AnonymousPage;
