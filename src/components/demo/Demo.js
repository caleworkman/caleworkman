import React, { Component } from "react";
import Bubble from "../bubble/Bubble.js";
import {Link} from "react-router-dom"

import {ReactComponent as AppStoreIcon} from "../../assets/app-store.svg";
import {ReactComponent as LaunchIcon} from "../../assets/launch.svg";
import {ReactComponent as GitHubIcon} from "../../assets/github.svg";

import "./Demo.css";

class Demo extends Component {

  render() {
    return (
      <div className="demo">
        <div className="demo__grid">
          {this.props.imageUrl
            ? <div className="demo__icon">
                <img src={this.props.imageUrl} alt={""} />
              </div>
            : null
          }

          <h1 className="demo__title">
            {this.props.name}
          </h1>

          <div className="demo__links">
            {this.props.appUrl
              ? <Link to={"//" + this.props.appUrl} target="_blank">
                  <AppStoreIcon className="demo__svg demo__svg--apple" />
                </Link>
              : null
            }
            {this.props.gitUrl
              ? <Link to={"//" + this.props.gitUrl} target="_blank">
                  <GitHubIcon className="demo__svg" />
                </Link>
              : null
            }
            {this.props.webUrl
              ? <Link to={"//" + this.props.webUrl} target="_blank">
                  <LaunchIcon className="demo__svg" />
                </Link>
              : null
            }
          </div>

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
    )
  }
}

export default Demo;

Demo.defaultProps = {
  imageUrl: null,
}
