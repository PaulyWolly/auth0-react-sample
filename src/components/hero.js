import React from "react";
import './hero.css'
//import HomeContent from "./home-content";

const logo = "https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png";

const Hero = () => (
  <div className="row">

    <div className="col-lg-1"></div>

    <div className="col-lg-10">
      <div className="text-center">

        <div className="logoTitle">
          <img className="mb-3 p-3 app-logo" src={logo} alt="React logo" width="120" />
          <h1 className="mb-4 app-title">React &amp; Auth0 </h1>
        </div>

        <p className="lead text-justify">

          <span className="text-center">This is a sample application that demonstrates an authentication flow for
          SPAs, using Bootstrap for styling, <b>Auth0</b> for user authentication with links to multiple social media
          login platforms... built in {" "}</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/quickstart/spa/react"
          >
            React
          </a>.
          <br/><br/>
          <span>All menu links on this site are protected by <b>Auth0</b>...
          so only authenticated uses can view content from the above links.</span>
          &nbsp;
          <span>I use tools such as Angular and React with Bootstrap and Material Design to create
          components that work well alone or in part with other components.
          <br/><br/>
          I use VS Code to do all my development work. I use Axure RP, Adobe XD and Figma to do
          my wireframing, and interactive prototyping. I host all my sites within my Github repo
          and I use Netlify to manage my CI-CD (Continuous Integration and Continuous Deployment).</span>
        </p>
      </div>

    </div>
    <div className="col-lg-2"></div>

  </div>
);

export default Hero;
