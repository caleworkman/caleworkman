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

    var animationDelay = 3 * 0.2; // "3" because of hi, name, about
    const skillBubbles = skills.map(skill => {
      animationDelay += 0.1;
      return (
        <div className="home__animate" style={{animationDelay: animationDelay + "s"}}>
          <Bubble content={skill} key={skill} />
        </div>
      );
    });

    return (
      <Layout {...this.props}>
        <div className="home">

          <div className="home__intro">
            <h2 className="home__hi home__animate">
              Hi, my name is
            </h2>
            <h1 className="home__name home__animate">
              Cale Workman.
            </h1>
            <p className="home__about home__animate">
              I'm a software engineer with 5+ years experience developing
              hardware testing solutions and data analysis tools.
            </p>

            <div className="home__skills">
              {skillBubbles}
            </div>
          </div>


          <div className="home__buttons">
            <Contact>
              <div className="home__animate" style={{animationDelay: animationDelay+"s"}}>
                <Button
                  content="Contact Me"
                  onClick={() => this.props.history.push("mailto:caleworkman@gmail.com")}
                />
              </div>
            </Contact>
              <div className="home__animate" style={{animationDelay: animationDelay+0.1+"s"}}>
                <Button
                  content="See My Work"
                  onClick={() => this.props.history.push("/portfolio")}
                />
            </div>
          </div>

        </div>

      </Layout>
    );
  }
}

export default withRouter(Home);
