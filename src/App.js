import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./views/home/Home.js";
import About from "./views/about/About.js";
import Education from "./views/education/Education.js";
import Portfolio from "./views/portfolio/Portfolio.js";
import Resume from "./views/resume/Resume.js";

import './App.css';

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/education",
    component: Education
  },
  {
    path: "/portfolio",
    component: Portfolio
  },
  {
    path: "/contact",
    component: Home
  },
  {
    path: "/resume",
    component: Resume
  },
];

class App extends Component {

  render() {
    const routeComponents = routes.map(({path, component}, index) =>
      <Route
        exact path={path}
        component={component}
        key={index}
      />
    );

  return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            {routeComponents}
          </Switch>
          <Redirect to="/" />
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
