import React, { Component } from "react";
import Footer from "../../components/footer/Footer.js";
import Nav from "../../components/nav/Nav.js";

import { push as Menu } from "react-burger-menu";
import { isMobileOnly } from 'react-device-detect';
import { withRouter } from "react-router";

import {ReactComponent as MenuIcon} from "../../assets/menu.svg";


import "./Layout.css"

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    }

    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  compnentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  resize() {
    this.setState({
      canFitHorizontalMenu: window.innerWidth <= 768
    });
  }

  render() {

    return (
      <div className="layout" id="outer-container">
        {isMobileOnly && this.state.canFitHorizontalMenu
          ? <Menu
              right
              isOpen={this.state.isMenuOpen}
              pageWrapId="page-wrap"
              outerContainerId="outer-container"
              customBurgerIcon={<MenuIcon className="layout__menu-icon"/>}
              width="200px">
              <Nav />
            </Menu>
          : null
        }
        <div className="layout__wrapper" id="page-wrap">

          <header className="layout__header">
            <div
            className="layout__logo"
            onClick={() => this.props.history.push("/")}>
              Cale
            </div>
            <div className="layout__nav">
              <Nav />
            </div>
          </header>

          <div className="layout__body">
            {this.props.children}
          </div>

          <div className="layout__footer">
            <Footer />
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
