import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home/Home.js";
import Education from "./views/education/Education.js";
import Portfolio from "./views/portfolio/Portfolio.js";

import './App.css';

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: Home
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
    component: Home
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
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
