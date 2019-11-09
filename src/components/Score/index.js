import React from "react";

function Score(props) {

    return(
        <li className="nav-item text-light score" 
                name="score topScore">
                    Score: {props.score} | Top Score: {props.topScore}
        </li>
    );
}

export default Score;
