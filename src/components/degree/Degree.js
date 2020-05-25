import React, { Component } from "react";
import {ToggleExpandIcon} from "../../components/expand/ToggleExpandIcon.js";
import SmoothCollapse from "react-smooth-collapse";
import "./Degree.css";

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

    const courseComponents = Object.keys(this.props.courses).map(key => {
      const course = this.props.courses[key];
      return (
        <div className="degree__course" key={key}>
          {key + (course.enrolled ? " (enrolled)" : "")}
        </div>
      )
    });

    const teachingComponents = this.props.teaching.map(taught => {
      return (
        <div className="degree__course" key={taught}>
          {taught}
        </div>
      )
    });

    const honorsComponents = this.props.honors.map(honor => {
      return (
        <div className="degree__course" key={honor}>
          {honor}
        </div>
      )
    });

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
        </div>

        <div className="degree__expanded-section">
          <SmoothCollapse expanded={this.state.expanded}>
            {courseComponents.length > 0
              ? <div className="degree__more">
                  <div className="degree__more-title">
                    Coursework
                  </div>
                  {courseComponents}
                </div>
              : null
            }

            {teachingComponents.length > 0
              ? <div className="degree__more">
                  <div className="degree__more-title">
                    Teaching
                  </div>
                  {teachingComponents}
                </div>
              : null
            }

            {honorsComponents.length > 0
              ? <div className="degree__more">
                  <div className="degree__more-title">
                    Honors
                  </div>
                  {honorsComponents}
                </div>
              : null
            }
          </SmoothCollapse>
        </div>

        <div className="degree__expand-icon">
          {ToggleExpandIcon({expanded: this.state.expanded})}
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
