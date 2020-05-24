import React, { Component } from "react";
import Layout from "../layout/Layout.js";
import "./About.css";

class About extends Component {
  render() {
    return (
      <Layout>
        <div className="about">
          <h2 className="about__title">Current</h2>
          <p>
            I am currently an <b>R&D Engineer</b> with Samtec based in Columbia, SC.
            I write software using <b>Python 3</b> to interface with electrical test
            equipment and automate signal integrity design work. I do some
            connector design for Samtec's new ventures using Ansys EDT Suite.
          </p>
          <p>
            I am simultaneously enrolled in a Computer Science Ph.D. program at the
            University of South Carolina. My interests are in machine learning
            and artificial intelligence.
          </p>
          <p>
            In my spare time, I develop mobile and web applications. I have
            released <a href="https://www.barleyapp.co" target="_blank"><b>Barley</b></a>,
            an iOS mobile application designed to facilitate bar inventory management.
            The app is written in <b>Swift</b> with a <b>Python 3</b> backend.
            The app is currently serving bars throughout NC. I recently
            released <a href="www.inthemoney.app" target="_blank"><b>In the Money App</b></a>,
            a <b>ReactJS</b> web application designed to build profit-loss diagrams
            from real-time stock option data.
          </p>

          <hr className="about__large-break" />

          <h2 className="about__title">Past</h2>
          <h3 className="about__subtitle">2018</h3>
          <p>
            I was a <b>C#/.NET</b> developer for the online form-building
            software <a href="https://www.cognitoforms.com" target="_blank">Cognito Forms</a>. In addition
            to feature development, I also handled Tier-3 customer support and
            was responsible for debugging complex customer forms and root-causing bugs.
          </p>

          <h3 className="about__subtitle">2014 - 2018</h3>
          <p>
            I worked as an electrical validation engineer
            with Intel in Columbia, SC. I designed signal integrity test
            strategies for server microprocessors and DDR3/4 memory technologies.
            I created automated test procedures using <b>Python 2/3</b> for
            hardware validation, data collection, and data processing.
          </p>

        </div>
      </Layout>
    );
  }
}

export default About;
