import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Service from "./Service";
import User from "./User";
import Search from "./Search";
import { Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <About name="About" />} />
        <Route
          exact
          path="/contact"
          render={() => <Contact name="Contact" />}
        />
        <Route exact path="/search" render={() => <Search name="Search" />} />
        <Route
          exact
          path="/service"
          render={() => <Service name="Service" />}
        />
        <Route exact path="/user/:fname/:lname" render={() => <User />} />
        <Redirect path="*" to="/" />
      </Switch>
    </>
  );
};

export default App;
