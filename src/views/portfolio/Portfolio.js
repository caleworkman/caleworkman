import React, { Component } from "react";
import Demo from "../../components/demo/Demo.js";
import Layout from "../layout/Layout.js";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <Layout>
        <div className="portfolio">
          <Demo
            title="In the Money"
            description="A tool to generate profit/loss diagram for stock options."
            url="inthemoney.app"
          />
        </div>
      </Layout>
    );
  }
}

export default Portfolio;
