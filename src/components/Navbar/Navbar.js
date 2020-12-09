import React, { Component } from "react";

import Brand from "../Brand/Brand";

import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <Brand />
        </nav>
        <div className="navbar-padding"></div>
      </>
    );
  }
}

export default Navbar;
