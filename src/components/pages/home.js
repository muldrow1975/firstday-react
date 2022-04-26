import React, {Component} from "react"
import PortfolioContainer from "../portfolio-items/portfolio-container"

export default class Home extends Component {
    render(){
        return (
            <div>
                <h2>Homepage</h2>
                <PortfolioContainer />
            </div>
        );
    }   
}
    