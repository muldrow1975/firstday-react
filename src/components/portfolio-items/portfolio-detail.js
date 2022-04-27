import React, {Component} from "react";

export default class PortfolioDetail extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h2>Portfolio Detail for {props.match.params.slug}</h2>
            </div>
        );
    }
}