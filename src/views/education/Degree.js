import React, { Component } from "react";
import {ToggleExpandIcon} from "../../components/expand/ToggleExpandIcon.js";
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

    const courseComponents = (this.state.expanded
      ? Object.keys(this.props.courses).map(key => {
          const course = this.props.courses[key];
          return (
            <div className="degree__course" key={key}>
              {key + (course.enrolled ? " (enrolled)" : "")}
            </div>
          )
        })
      : null
    );

    const teachingComponents = (this.state.expanded
      ? this.props.teaching.map(taught => {
          return (
            <div className="degree__course" key={taught}>
              {taught}
            </div>
          )
      })
      : null
    );

    const honorsComponents = (this.state.expanded
      ? this.props.honors.map(honor => {
          return (
            <div className="degree__course" key={honor}>
              {honor}
            </div>
          )
      })
      : null
    );

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

          {(this.state.expanded && courseComponents.length > 0 )
            ? <React.Fragment>
                <div className="degree__more">
                  <div className="degree__more-title">
                    Coursework
                  </div>
                  {courseComponents}
                </div>
              </React.Fragment>
            : null
          }

          {(this.state.expanded && teachingComponents.length > 0 )
            ? <React.Fragment>
                <div className="degree__more">
                  <div className="degree__more-title">
                    Teaching
                  </div>
                  {teachingComponents}
                </div>
              </React.Fragment>
            : null
          }

          {(this.state.expanded && honorsComponents.length > 0 )
            ? <React.Fragment>
                <div className="degree__more">
                  <div className="degree__more-title">
                    Honors
                  </div>
                  {honorsComponents}
                </div>
              </React.Fragment>
            : null
          }

        </div>
        <div className="degree__expand-icon">
          {ToggleExpand({expanded: this.state.expanded})}
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
