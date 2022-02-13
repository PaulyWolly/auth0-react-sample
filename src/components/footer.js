import React from "react";
import Clock from "../views/digital-clock/Clock";
import './footer.css'

const Footer = () => (
  <div className="footer-container">

    <footer className="footer p-2">

        <div className="logo" />

        <p className="footer-text">
          Secure by&nbsp; {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://auth0.com">
            Auth0
          </a>
        </p>

        <div className="clock">
          <Clock />
        </div>

    </footer>
  </div>
);

export default Footer;
