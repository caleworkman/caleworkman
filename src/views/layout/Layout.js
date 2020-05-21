import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import Nav from "../../components/nav/Nav.js";

import { isMobileOnly } from 'react-device-detect';
import { push as Menu } from "react-burger-menu";

import {ReactComponent as MenuIcon} from "../../assets/menu.svg";

import "./Layout.css"

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    }
  }

  render() {

    return (
      <div className="layout" id="outer-container">

        {isMobileOnly
          ? <Menu
              right
              isOpen={this.state.isMenuOpen}
              pageWrapId="page-wrap"
              outerContainerId="outer-container"
              customBurgerIcon={<MenuIcon />}
              width="50%">
              <Nav />
            </Menu>
          : null
        }
        <div className="layout__content" id="page-wrap">

          <div className="layout__header">
            <Header />
          </div>

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

export default Layout;
