import React, { Component }from "react";

class Card extends Component {
    
    componentDidMount = () => {
        this.id = this.props.id
    }
    
    render = () => {
        return (
            <div className="card">
                <div className="img-container">
                    <img 
                        src={this.props.image} 
                        alt="img"
                        id={this.props.id}
                        onClick={this.props.handleCardClick} />
                </div>
            </div>
        );
    }
}

export default Card;