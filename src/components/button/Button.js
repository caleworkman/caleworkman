import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <div
        className={"button" + (this.props.primary ? " button--primary" : "") }
        onClick={this.props.onClick}>
        {this.props.content}
      </div>
    );
  }
}

export default Button;

Button.defaultProps = {
  primary: false
}
