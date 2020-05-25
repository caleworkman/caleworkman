import React, { Component } from "react";
import Layout from "../layout/Layout.js";
import Bubble from "../../components/bubble/Bubble.js";
import Button from "../../components/button/Button.js";
import Contact from "../../components/contact/Contact.js";

import { withRouter } from "react-router";

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
      <Layout {...this.props}>
        <div className="home">

          <div className="home__intro">
            <h2 className="home__hi">
              Hi, my name is
            </h2>
            <h1 className="home__name">
              Cale Workman.
            </h1>
            <p className="home__about">
              I'm a software engineer with 5+ years experience developing
              hardware testing solutions and data analysis tools.
            </p>

            <div className="home__skills">
              {skillBubbles}
            </div>
          </div>


          <div className="home__buttons">
            <Contact>
              <Button
                content="Contact Me"
                onClick={() => this.props.history.push("mailto:caleworkman@gmail.com")}
              />
            </Contact>
            <Button
              content="See My Work"
              onClick={() => this.props.history.push("/portfolio")}
            />
          </div>

        </div>

      </Layout>
    );
  }
}

export default withRouter(Home);
