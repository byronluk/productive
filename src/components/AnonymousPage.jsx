import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';

const AnonymousPage = ({ signUp, logIn, toggleLogIn, handleSignUpChange, handleLogInChange }) => {
  return (
    <div>
      { signUp.toggleLogIn
        ? <SignUp
          signUp={ signUp }
          handleChange={ handleSignUpChange }
          toggleLogIn={ toggleLogIn }
        />
        : <LogIn
          logIn={ logIn }
          handleChange={ handleLogInChange }
          toggleLogIn={ toggleLogIn }
        />
      }
    </div>
  );
};

export default AnonymousPage;
