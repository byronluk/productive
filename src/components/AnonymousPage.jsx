import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';

const AnonymousPage = ({ handleChange }) => {
  return (
    <div>
      <SignUp handleChange={ handleChange } />
    </div>
  );
};

export default AnonymousPage;
