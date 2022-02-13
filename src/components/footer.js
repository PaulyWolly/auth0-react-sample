import React from "react";
import './footer.css'

const Footer = () => (
  <footer className="footer p-2 text-center">
    <div className="logo" />
    <p className="footer-text">
      Auth by {" "}
      <a target="_blank" rel="noopener noreferrer" href="https://auth0.com">
        Auth0
      </a>
    </p>
  </footer>
);

export default Footer;
