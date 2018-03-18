// @flow
import React from "react";

import NavBar from "./common/NavBar";
import AnonymousPage from "./AnonymousPage";
// import HomePage from '../containers/HomePageContainer';

type User = {
  status: string,
  email: string,
  photoURL: string,
  firstName: string,
  lastName: string,
  uid: string
};

const App = ({ auth }: { auth: User }) => {
  return (
    <main>
      <NavBar status={auth.status} />
      {!auth.status && <AnonymousPage />}
      {/* { auth.status == 'LOGGED_IN' && <HomePage /> } */}
    </main>
  );
};

export default App;
