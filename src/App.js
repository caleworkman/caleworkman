import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home/Home.js";

import './App.css';

const MIN_DESKTOP_WIDTH = 768;

const routes = [
  {
    path: "/",
    component: Home
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < MIN_DESKTOP_WIDTH,
    }
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize() {
    this.setState({
      isMobile: window.innerWidth < MIN_DESKTOP_WIDTH,
    });
  }

  render() {
    const routeComponents = routes.map(({path, component}, index) =>
      <Route
        exact path={path}
        render={() => React.createElement(component, {
          isMobile: this.state.isMobile
        })}
        key={index}
      />
    );

    return (
      <BrowserRouter>
        <Switch>
          {routeComponents}
        </Switch>
      </BrowserRouter>
    );
  }
}



export default App;
