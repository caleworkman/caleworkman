import React, { PureComponent } from "react";
import { withRouter } from "react-router";

import {ReactComponent as AccountIcon} from "../../assets/account-circle.svg";
import {ReactComponent as DescriptionIcon} from "../../assets/description.svg";
import {ReactComponent as DevicesIcon} from "../../assets/devices.svg";
import {ReactComponent as HomeIcon} from "../../assets/home.svg";
import {ReactComponent as SchoolIcon} from "../../assets/school.svg";

import "./Nav.css";

class Nav extends PureComponent {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);

    this.navs = {
      'home': { icon: <HomeIcon />, to: "/" },
      'about': { icon: <AccountIcon />, to: "/about" },
      'education': { icon: <SchoolIcon />, to: "/education" },
      'portfolio': { icon: <DevicesIcon />, to: "/portfolio" },
      'resume': { icon: <DescriptionIcon />, to: "/resume" }
    };
  }

  navigate(event) {
    this.props.history.push(event.currentTarget.id);
  }

  render() {
    const location = this.props.location.pathname;

    var animationDelay = 0;
    const navs = Object.keys(this.navs).map(nav => {
      const icon = this.navs[nav].icon;
      const to = this.navs[nav].to;
      var className = (location === to)
        ? "nav__option nav__option--selected"
        : "nav__option";

      if (this.props.animate) {
        className += " nav__option--animated";
      }

      animationDelay += 0.2;

      return (
        <div className={className} id={to} key={nav} onClick={this.navigate}
          style={{animationDelay: animationDelay + "s"}}>
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
