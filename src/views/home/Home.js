import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">

        <div className="home__content">

          <div className="home__header">
            <Header />
          </div>

        </div>

      </div>
    );
  }
}

export default Home;
