/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Switch, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router-dom';

import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi, About, ApiContent } from "./views";
import ProtectedRoute from "./auth/protected-route";

import Posts from './views/Posts/Posts';
import Photos from './views/Photos/Photos';

import MyClock from './views/clock/MyClock';
import HooksDemos from './views/WebDevSimplified/HooksDemos/HooksDemos';


// styles
import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/demo" component={HooksDemos} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/about" component={About} />
          <ProtectedRoute path="/photos" component={Photos} />
          <ProtectedRoute path="/posts" component={Posts} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
          <Route render={() => <Redirect to={{home: "/"}} />} />

        </Switch>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
