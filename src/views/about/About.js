import React, { Component } from "react";
import Layout from "../layout/Layout.js";
import "./About.css";

class About extends Component {
  render() {
    return (
      <Layout>
        <div className="about">
          <h2>Current</h2>
          <p>
            I am currently an R&D Engineer with Samtec based in Columbia, SC.
            I build software using <b>Python 3</b> to interface with electrical test
            equipment and automate signal integrity design work. I do some
            connector design for Samtec's new ventures using Ansys EDT Suite.
          </p>
          <p>
            I am currently enrolled in a Computer Science Ph.D. program at the
            University of South Carolina. My interests are in machine learning
            and artificial intelligence.
          </p>
          <p>
            In my spare time, I develop mobile and web applications. I have
            released <a href="www.barleyapp.co"><b>Barley</b></a>, an iOS mobile application designed to facilitate
            bar and restaurant liquor inventory management. The app is written
            in <b>Swift</b> with a <b>Python 3</b> backend. The app is currently
            serving bars throughout NC with a dedicated userbase.
          </p>

          <h2>2018</h2>
          <p>
            Previously I was a C#/.NET developer for an online form builder.
            I managed Tier-3 customer support and was responsible for debugging
            complex customer forms and root-causing significant bugs.
          </p>

          <h2>2014 - 2017</h2>
          <p>
            While finishing my Masters in electrical engineering, I worked as an
            electrical validation engineer with Intel in Columbia, SC. I designed
            signal integrity test strategies for server microprocessors and
            DDR3/4 memory technologies. I created automated test procedures
            using Python 2/3 for hardware validation, data collection, and data
            processing.
          </p>

        </div>
      </Layout>
    );
  }
}

export default About;
