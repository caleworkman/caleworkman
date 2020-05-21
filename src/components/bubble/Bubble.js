import React, { Component } from "react";
import "./Bubble.css";

class Bubble extends Component {
  render() {
    return (
      <div className="bubble">
        {this.props.content}
      </div>
    );
  }
}

export default Bubble;
