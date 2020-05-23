import React, { Component } from "react";
import Layout from "../layout/Layout.js";
import Bubble from "../../components/bubble/Bubble.js";
import Button from "../../components/button/Button.js";
import "./Home.css";

class Home extends Component {
  render() {

    const skills = [
      "Python3", "ReactJS", "Swift", "HTML5", "CSS3"
    ];

    const skillBubbles = skills.map(skill => {
      return <Bubble content={skill} key={skill} />
    });

    return (
      <Layout>
        <div className="home">

          <div className="home__intro">
            <h2 className="home__hi">
              Hi, my name is
            </h2>
            <h1 className="home__name">
              <b>Cale Workman.</b>
            </h1>
            <h2 className="home__about">
              I'm a software engineer based in Columbia, SC with 5+ years
              experience developing hardware testing solutions and data analysis
              tools.
            </h2>

            <div className="home__skills">
              {skillBubbles}
            </div>
          </div>


          <div className="home__buttons">
            <Button content="Contact Me" />
            <Button content="My Work" />
          </div>

        </div>

      </Layout>
    );
  }
}

export default Home;
