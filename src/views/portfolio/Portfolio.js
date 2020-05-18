import React, { Component } from "react";
import Demo from "../../components/demo/Demo.js";
import Layout from "../layout/Layout.js";
import "./Portfolio.css";

const projects = require("./projects.json");

class Portfolio extends Component {
  render() {

    const projectComponents = Object.keys(projects).map(key => {
      const project = projects[key];
      return <Demo key={project.name} {...project} />
    });

    return (
      <Layout>
        <div className="portfolio">
          {projectComponents}
        </div>
      </Layout>
    );
  }
}

export default Portfolio;
