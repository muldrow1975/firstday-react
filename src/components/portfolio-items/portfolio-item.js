import React from "react";

export default function(props) {
    return (
        <div>
            <h3>Portfolio Item</h3>
            <h4>{props.thanos}</h4>
            <h5>{props.url}</h5>
            <h6>{props.mark}</h6>
            <h7>{props.jarvis}</h7>
        </div>
    );


}