import React, { Component } from "react";
import { withRouter } from "react-router";

import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);

    this.navs = ['about', 'education', 'portfolio', 'contact', 'resume'];
  }

  navigate(event) {
    this.props.history.push(event.currentTarget.id);
  }

  render() {
    const location = this.props.location.pathname.replace("/","");

    const navs = this.navs.map(nav => {
      const className = (location === nav)
        ? "nav__option nav__option--selected"
        : "nav__option";
      return (
        <div className={className} id={nav} key={nav} onClick={this.navigate}>
          {nav}
        </div>
      )}
    );

    return (
      <div className="nav">
        {navs}
      </div>
    );
  }
}

export default withRouter(Nav);
