import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio-items/portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Sonic React Portfolio</h1>
        <PortfolioContainer />
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}

        </div>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}
