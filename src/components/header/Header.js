import React, { Component } from "react";
import CircleText from "../circletext/CircleText.js";
import Nav from "../nav/Nav.js";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">

        <div className="header__left">
          <h1 className="header__title">
            Cale Workman
          </h1>
          <h2 className="header__subtitle">
            Software Developer, CS Ph.D. Student
          </h2>
        </div>

        <div className="header__right">
          <Nav />
        </div>
      </div>
    );
  }
}

export default Header;
