import React, { Component } from "react";
import Bubble from "../bubble/Bubble.js";
import {Link} from "react-router-dom"
import "./Demo.css";

class Demo extends Component {

  render() {
    return (
      <Link to={"//" + this.props.url} target="_blank" className="demo__link">
        <div className="demo">
          <div className="demo__grid">
            <div className="demo__icon">
              <img src={this.props.imageUrl} alt={""} />
            </div>
            <h1 className="demo__title">
              {this.props.name}
            </h1>
            <p className="demo__description">
              {this.props.description}
            </p>

            <div className="demo__tech">
              {this.props.technologies.map(tech => {
                return <Bubble content={tech} key={tech}/>
              })}
            </div>
          </div>

          {this.props.wip
            ? <div className="demo__wip">*Under Development</div>
            : null
          }
        </div>
      </Link>
    )
  }
}

export default Demo;

Demo.defaultProps = {
  imageUrl: null,
}
