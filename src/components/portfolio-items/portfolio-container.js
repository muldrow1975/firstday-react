import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

      this.state ={
          pageTitle: "Welcome to my profolio",
          data: [
              {title:"Shell"},
              {title: "Bp"} ,
              {title:"Exxon"},
        
        ]
      }

      this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
    }
    portfolioItems() {
        
        return this.state.data.map(item => {
            return <PortfolioItem thanos={item.title}  url={"google.com"} />
        });
    }

    
    handlePageTitleUpdate(){
        this.setState({
            pageTitle: "Thanos Rules"
        });
    }
    //State
    //Lifecycle hooks
    render() {
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>
                

                {this.portfolioItems()}
               
                <hr/>

                <button onClick ={this.handlePageTitleUpdate} > changeTitleUpdate </button>
            </div>
        )

    }


}