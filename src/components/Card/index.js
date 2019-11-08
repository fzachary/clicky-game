import React, { Component } from "react";
import style from "./style.css";

class Card extends Component {

    componentDidMount() {
        this.id = this.props.id;
    }
    
    render() {
        return (
            <div className="character">
                <img
                    className="clicked"
                    src={this.props.image}
                    alt="character"
                    id={this.props.id}
                    onClick={this.props.handleCardClick}
                    />
            </div>
        );
    }
}

export default Card;