import React, { Component } from "react";
import Score from "../Score";

class Navbar extends Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav ul-auto">
                    <li className="navbar-brand">
                        <a className="navbar-brand" href="/">Clicky Game</a>
                    </li>
                    <li className="nav-item text-light">Click an image to begin!</li>
                    <Score 
                        score={this.props.score}
                        topScore={this.props.topScore}/>
                </ul>            
            </nav>
        );
    }
}

export default Navbar;
