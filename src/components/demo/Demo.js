import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./Demo.css";

class Demo extends Component {
  render() {
    return (
      <Link to={"//"+this.props.url} target="_blank">
        <div className="demo">
          <div className="demo__icon">
          </div>
          <div className="demo__title">
            {this.props.title}
          </div>
          <div className="demo__description">
            {this.props.description}
          </div>
        </div>
      </Link>
    )
  }
}

export default Demo;
