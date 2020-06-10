import React, { PureComponent } from "react";
import Demo from "../../components/demo/Demo.js";
import Layout from "../layout/Layout.js";
import "./Portfolio.css";

const portfolio = require("./portfolio.json");

class Portfolio extends PureComponent {
  render() {

    const projectComponents = Object.keys(portfolio).map(key => {
      const project = portfolio[key];
      if (!project.wip) {
        return <Demo key={project.name} {...project} />
      }
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
