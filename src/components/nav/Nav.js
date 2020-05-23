import React, { Component } from "react";
import { withRouter } from "react-router";

import {ReactComponent as AccountIcon} from "../../assets/account-circle.svg";
import {ReactComponent as DescriptionIcon} from "../../assets/description.svg";
import {ReactComponent as DevicesIcon} from "../../assets/devices.svg";
import {ReactComponent as SchoolIcon} from "../../assets/school.svg";

import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);

    this.navs = {
      'home': <AccountIcon />,
      'about': <AccountIcon />,
      'education': <SchoolIcon />,
      'portfolio': <DevicesIcon />,
      'resume': <DescriptionIcon />
    };
  }

  navigate(event) {
    this.props.history.push(event.currentTarget.id);
  }

  render() {
    const location = this.props.location.pathname.replace("/","") || "home";

    const navs = Object.keys(this.navs).map(nav => {
      const icon = this.navs[nav];
      const className = (location === nav)
        ? "nav__option nav__option--selected"
        : "nav__option";

      return (
        <div className={className} id={nav} key={nav} onClick={this.navigate}>
          <div className="nav__icon">
            {icon}
          </div>
          <div className="nav__name">
            {nav}
          </div>
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
