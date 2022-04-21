import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

      
    }
    portfolioItems() {
        const data = ["Shell", "Bp", "Exxon"];

        return data.map(item => {
            return <PortfolioItem thanos={item}  url={"google.com"} />
        });
    }

    portfolioItems2() {
        const data = ["United States ", "British", "Swedish"];

        return data.map(item => {
            return <PortfolioItem mark={item} />
        });
    }

    portfolioItems3() {
        const data = ["Alabama classs ", "Thames class", "Norse Class"];

        return data.map(item => {
            return <PortfolioItem jarvis={item} />
        });
    }

    //State
    //Lifecycle hooks
    render() {
        return(
            <div>
                <h2> Portfolio goes here...</h2>
                

                {this.portfolioItems()}
                {this.portfolioItems2()}
                {this.portfolioItems3()}
            </div>
        )

    }


}