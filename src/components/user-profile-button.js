/* eslint-disable no-unused-vars */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom'

import './user-profile-btn.css'

const UserProfileButton = () => {
  //const { loginWithRedirect } = useAuth0();

  const navigate = useHistory();

  const handleClick = () => {
    navigate.push("/profile")
  }
  return (
    <button
        className="user-profile-btn btn-sm btn-primary"
        onClick={handleClick}
    >
        {/* <span class="loggedState iconify" data-icon="bx:bxs-user"></span>Profile */}
    {/* <span className="iconify" data-icon="mdi:login-variant"></span>  */}
    <span class="loggedState iconify" data-icon="ant-design:user-outlined"></span>Profile
    </button>
  );
};

export default UserProfileButton;