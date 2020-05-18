import React, { Component } from "react";
import { withRouter } from "react-router";

import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  navigate(event) {
    this.props.history.push(event.currentTarget.id);
  }

  render() {
    return (
      <div className="nav">
        <div className="nav__option" id="about" onClick={this.navigate}>
          About
        </div>
        <div className="nav__option" id="experience" onClick={this.navigate}>
          Experience
        </div>
        <div className="nav__option" id="portfolio" onClick={this.navigate}>
          Portfolio
        </div>
        <div className="nav__option" id="contact" onClick={this.navigate}>
          Contact
        </div>
        <div className="nav__option" ic="resume" onClick={this.navigate}>
          Resume
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
