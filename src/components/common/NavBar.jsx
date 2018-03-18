// @flow
import React from "react";
import SignUp from "./auth/SignUpContainer";
import LogIn from "./auth/LogInContainer";

const NavBar = ({ status }: { status: string }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Productive
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <button
            className="nav-item btn btn-outline-success"
            type="button"
            data-toggle="modal"
            data-target="#signUpModal"
          >
            Sign Up
          </button>
          <button
            className="nav-item btn btn-outline-info mx-3"
            type="button"
            data-toggle="modal"
            data-target="#logInModal"
          >
            Log In
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <SignUp />
      </div>
      <div
        className="modal fade"
        id="logInModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <LogIn />
      </div>
    </nav>
  );
};

export default NavBar;
