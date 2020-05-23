import React, { Component } from "react";
import Layout from "../layout/Layout.js";
import Bubble from "../../components/bubble/Bubble.js";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="home">
          <h2>
            Skills
          </h2>
          <div className="home__skills">

          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
