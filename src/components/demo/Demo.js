import React, { Component } from "react";
import Bubble from "../bubble/Bubble.js";
import {Link} from "react-router-dom"
import SmoothCollapse from "react-smooth-collapse";
import {ToggleExpandIcon} from "../../components/expand/ToggleExpandIcon.js";


import {ReactComponent as AppStoreIcon} from "../../assets/app-store.svg";
import {ReactComponent as LaunchIcon} from "../../assets/launch.svg";
import {ReactComponent as GitHubIcon} from "../../assets/github.svg";

import "./Demo.css";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }

    this.expand = this.expand.bind(this);
  }

  expand() {
    this.setState(prevState => {
      return {expanded: !prevState.expanded}
    });
  }

  render() {

    const techComponents = this.props.technologies.map(tech => {
      return <Bubble content={tech} key={tech}/>
    });

    return (
      <div className="demo" onClick={this.expand}>
        <div className="demo__grid">
          {this.props.imageUrl
            ? <div className="demo__icon">
                <img src={this.props.imageUrl} alt={""} />
              </div>
            : null
          }

          <h1 className={"demo__title" + (!this.props.imageUrl ? " demo__title--span" : "")}>
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
            {this.props.wip
              ? <span className="demo__wip"> (In Development)</span>
              : null
            }
          </p>

          <div className="demo__collapsible">
            <SmoothCollapse expanded={this.state.expanded}>
              <div className="demo__tech">
                {techComponents}
              </div>
            </SmoothCollapse>
          </div>

          <div className="demo__uncollapsible">
            <div className="demo__tech">
              {techComponents}
            </div>
          </div>
        </div>

        <div className="demo__expand-icon">
          {ToggleExpandIcon({expanded: this.state.expanded})}
        </div>
      </div>
    )
  }
}

export default Demo;

Demo.defaultProps = {
  imageUrl: null,
}
