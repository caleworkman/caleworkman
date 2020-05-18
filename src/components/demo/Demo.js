import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./Demo.css";

class Demo extends Component {

  render() {

    // TODO: Check if url includes https:///www. and if not, append it
    const imageUrl = "https://www." + this.props.url + "/favicon.ico";

    return (
      <div className="demo">
        <Link to={"//"+this.props.url} target="_blank">
          <div className="demo__grid">
            <div className="demo__icon">
              <img src={imageUrl} alt={null} />
            </div>
            <h2 className="demo__title">
              {this.props.title}
            </h2>
            <div className="demo__description">
              {this.props.description}
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Demo;

Demo.defaultProps = {
  imageUrl: "",
}
