import React, { Component } from "react";
import "./Degree.css";

import {ReactComponent as ExpandLess} from "../../assets/expand-less.svg";
import {ReactComponent as ExpandMore} from "../../assets/expand-more.svg";

class Degree extends Component {
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

    const moreComponents = (this.state.expanded
      ? Object.keys(this.props.courses).map(key => {
          const course = this.props.courses[key];
          return (
            <div className="degree__course" key={key}>
              {key + (course.enrolled ? " (enrolled)" : "")}
            </div>
          )
        })
      : null
    )

    return (
      <div className="degree" onClick={this.expand}>
        <div className="degree__grid">
          <h2 className="degree__title">
            {this.props.degree + " " + this.props.field}
          </h2>
          <div className="degree__date">
            {this.props.graduated}
          </div>
          <div className="degree__university">
            {this.props.university}
          </div>

          {(this.state.expanded && moreComponents.length > 0 )
            ? <React.Fragment>
                <div className="degree__courses">
                  <div className="degree__courses-title">
                    Coursework
                  </div>
                  {moreComponents}
                </div>
              </React.Fragment>
            : null
          }

        </div>
        <div className="degree__expand-icon">
          {this.state.expanded
            ? <ExpandLess />
            : <ExpandMore />
          }
        </div>
      </div>
    );
  }
}

export default Degree;

Degree.defaultProps = {
  courses: {},
  gpa: null
}
