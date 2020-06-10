import React, { PureComponent } from "react";
import "./Bubble.css";

class Bubble extends PureComponent {
  render() {
    return (
      <div className="bubble">
        {this.props.content}
      </div>
    );
  }
}

export default Bubble;
