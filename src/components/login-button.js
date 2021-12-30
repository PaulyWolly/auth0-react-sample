import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn-sm btn-primary"
      onClick={() => loginWithRedirect()}
    >
    <span className="loggedState iconify" data-icon="mdi:login-variant"></span> Log In
    </button>
  );
};

export default LoginButton;
