import React, { Component } from "react";
import Layout from "../layout/Layout.js";
import Degree from "./Degree.js";

import "./Education.css";

const education = require("./education.json");

class Education extends Component {

  render() {

    const educationComponents = Object.keys(education).map(key => {
      const edu = education[key];
      return (
        <div className="education__item" key={key}>
          <Degree {...edu} />
        </div>
      )
    })

    return (
      <Layout>
        <div className="education">
          {educationComponents}
        </div>
      </Layout>
    );
  }
}

export default Education;
