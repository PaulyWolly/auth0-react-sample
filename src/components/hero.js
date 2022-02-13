import React from "react";

const logo = "https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">React Auth0 Project</h1>
    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      SPAs, using <b>Auth0</b> &amp; {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://auth0.com/docs/quickstart/spa/react"
      >
        React
      </a> <br/><br/><span>All menu links on this site are protected by <b>Auth0</b>.
      Only authenticated uses can view content from the above links</span>
    </p>

  </div>
);

export default Hero;
