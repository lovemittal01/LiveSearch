import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="menu">
        <NavLink activeClassName="active" to="/" exact>
          About
        </NavLink>
        <NavLink activeClassName="active" to="/contact" exact>
          Contact
        </NavLink>
        <NavLink activeClassName="active" to="/search" exact>
          Search
        </NavLink>
        <NavLink activeClassName="active" to="/service" exact>
          Service
        </NavLink>
        <NavLink activeClassName="active" to="/user/love" exact>
          User
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
