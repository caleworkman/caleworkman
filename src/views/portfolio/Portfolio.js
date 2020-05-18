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
            description="Plot stock option profit-loss diagrams using real-time
            Yahoo finance data. Developed mobile-first with a responsive web UI."
            url="inthemoney.app"
          />
          <Demo
            title="Barley"
            description="An iOS mobile app for restaurant inventory management
            and order submission. Written in Swift and using CloudKit API. A python
            backend web-scrapes to keep the inventory up to date."
            url="www.barleyapp.co"
          />
          <Demo
            title="LifeChart"
            description="A tool to generate an aesthetic personal timeline.
            Written in React with Firebase backend."
            url="www.lifechart.app"
          />
          <Demo
            title="Wow Raid Bingo"
            description="A game to be played inside the retail version of World
            of Warcraft. Written in Lua using AceComm for player communication."
            url="www.github.com/caleworkman/RaidBingo"
          />
        </div>
      </Layout>
    );
  }
}

export default Portfolio;
