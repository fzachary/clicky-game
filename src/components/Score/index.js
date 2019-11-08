import React from "react";

function Score(props) {

    return(
        <li className="score nav-item text-light">
            <h5 
                name="score"
            >Score: {props.score}
            </h5>
            <h5
                name="topScore"
            >Top Score: {props.topScore}
            </h5>
        </li>
    );
}

export default Score;
