import React from "react";
import { NavLink } from "react-router-dom";

import { UserType } from "../App";

import "./Navbar.css";

type NavbarProps = {
  user?: UserType;
};

class Navbar extends React.Component<NavbarProps> {
  render() {
    return (
      <div className="Navbar">
        {" "}
        <NavLink className="Link" to="/">
          Home
        </NavLink>
        <NavLink className="Link" to="/user">
          User
        </NavLink>
        <NavLink className="Link" to="/">
          Welcome {this.props.user?.first_name}
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
