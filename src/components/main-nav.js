import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
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

  </div>
);

export default MainNav;
