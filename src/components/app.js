import React, { Component } from "react";
import moment from "moment";

import PortfolioContainer from "./portfolio-items/portfolio-container";
import NavigationContainer from "./navigation-container/navigation-container";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavigationContainer />
        <h1>Iron Studios Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <h2> Why is so sad!</h2>
        <PortfolioContainer />
      </div>
    );
  }
}


