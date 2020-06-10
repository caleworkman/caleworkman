import React, { PureComponent } from "react";
import "./Button.css";

class Button extends PureComponent {
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
