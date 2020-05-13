import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__option">
          About
        </div>
        <div className="nav__option">
          Experience
        </div>
        <div className="nav__option">
          Portfolio
        </div>
        <div className="nav__option">
          Contact
        </div>
        <div className="nav__option">
          Resume
        </div>
      </div>
    );
  }
}

export default Nav;
