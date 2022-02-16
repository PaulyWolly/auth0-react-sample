import {NavLink} from "react-router-dom";
import React from "react";
import './main-nav.css'

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <div className="nav-links">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
      </NavLink>

      {/* <NavLink
        to="/profile"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Profile
      </NavLink> */}

      <NavLink
        to="/external-api"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        External API
      </NavLink>

      <NavLink
        to="/about"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        About
      </NavLink>

      <NavLink
        to="/todos"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        API Call
      </NavLink>

      <NavLink
        to="/demo"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        demos
      </NavLink>

    </div>
  </div>
);

export default MainNav;
