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
        <div className="layout__wrapper" id="page-wrap">

          <header className="layout__header">
            <div
            className="layout__logo"
            onClick={() => this.props.history.push("/")}>
              Cale
            </div>
            {!isMobileOnly
              ? <Nav />
              : <div style={{visibility: "hidden", height: "24px"}} />
              }
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
