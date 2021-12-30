/* eslint-disable no-unused-vars */
import React from "react";
import AuthenticationButton from "./authentication-button";
import UserAuthProfileButton from "./user-auth-profile-button";

const AuthNav = () => (

  <div className="navbar-nav ml-auto">
    <UserAuthProfileButton />&nbsp;&nbsp;
    <AuthenticationButton />
  </div>
);

export default AuthNav;
