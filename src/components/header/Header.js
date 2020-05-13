import React, { Component } from "react";
import Nav from "../../components/nav/Nav.js";
import {ReactComponent as MenuIcon} from "../../assets/menu.svg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">
          Cale Workman
        </div>
        <div className="header__nav header__nav--bar">
          <Nav />
        </div>
        <div className="header__nav header__nav--icon">
          <MenuIcon />
        </div>
      </div>
    );
  }
}

export default Header;
