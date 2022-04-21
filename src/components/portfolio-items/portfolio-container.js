import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

      
    }
    portfolioItems() {
        const data = ["Shell", "Bp", "Exxon"];

        return data.map(item => {
            return <h2>{item}</h2>
        });
    }
    //State
    //Lifecycle hooks
    render() {
        return(
            <div>
                <h2> Portfolio goes here...</h2>

                {this.portfolioItems()}
            </div>
        )

    }


}