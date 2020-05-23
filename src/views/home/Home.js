import React, { Component } from "react";
import Layout from "../layout/Layout.js";
import Bubble from "../../components/bubble/Bubble.js";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="home">
          <div className="home__content">
            <h2 className="home__hi">
              Hi, my name is
            </h2>
            <h1 className="home__name">
              Cale Workman
            </h1>
            <h2 className="home__about">
              I'm a software engineer specializing in Front-End
              development.
            </h2>
          </div>


        </div>
      </Layout>
    );
  }
}

export default Home;
