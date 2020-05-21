import React, { Component } from "react";
import Nav from "../../components/nav/Nav.js";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">
          Cale Workman
        </h1>
        <h2 className="header__subtitle">
          Experienced Software Developer, Computer Science Ph.D. Student
        </h2>
        <div className="header__nav">
          <Nav />
        </div>
      </div>
    );
  }
}

export default Header;
