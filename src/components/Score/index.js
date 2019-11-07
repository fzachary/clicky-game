import React, { Component } from "react";

class Score extends Component {

    handleScore = event => {
        this.setState({ name: event.name });
        console.log(event);
    }

    render = () => {

        return(
            <li className="score nav-item text-light">
                <h5 
                    name="score"
                    onChange={this.handleScore}
                >Score: {this.props.score}
                </h5>
                <h5
                    name="topScore"
                    onChange={this.handleScore}
                >Top Score: {this.props.topScore}
                </h5>
            </li>
        );
    }
}

export default Score;
