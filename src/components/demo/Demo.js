import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./Demo.css";

class Demo extends Component {

  render() {
    return (
      <div className="demo">
        <Link to={"//"+this.props.url} target="_blank">
          <div className="demo__grid">
            <div className="demo__icon">
              <img src={this.props.imageUrl} alt={null} />
            </div>
            <h2 className="demo__title">
              {this.props.name}
            </h2>
            <div className="demo__description">
              {this.props.description}
            </div>

            <div className="demo__tech">
              <span className="demo__tech-list">
                {this.props.technologies.join(", ")}
              </span>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Demo;

Demo.defaultProps = {
  imageUrl: null,
}
