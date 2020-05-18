import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import "./Layout.css"

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="layout__content">

          <div className="layout__header">
            <Header />
          </div>

          {this.props.children}
          
        </div>
      </div>
    );
  }
}

export default Layout;
