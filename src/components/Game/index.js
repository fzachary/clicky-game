import React, { Component } from "react";
import Card from "../Card";
import cards from "../../cards.json";

class Game extends Component {
    state = {
        score: 0,
        topScore: 0,
        cards: cards,
        clicked: []
    }

    // Randomize the cards before the component mounts
    componentWillMount() {
        this.randomizeCards();
    }

    // Function to reset the game state
    resetGame = () => {
        this.setState({
            score: 0,
            clicked: []
        });
        this.randomizeCards();
    }

    // Function for if the user loses the game
    loseGame = () => {
        alert("GAME OVER!");
        this.resetGame();
    }

    // function for if the user wins the game
    winGame = () => {
        alert("YOU WIN! TREAT YO' SELF!");
        this.resetGame();
    }

    // After a card is clicked, shuffle the cards
    randomizeCards = () => {
        let cardArray = this.state.cards;
        for (let i = cardArray.length - 1; i > 0; i--) {
            let randomNum = Math.floor(Math.random() * (i + 1));
            [cardArray[i], cardArray[randomNum]] = [cardArray[randomNum], cardArray[i]];
        }
        this.setState({
            cards: cardArray
        });
    }

    // Function to handle the click events
    handleCardClick = (event) => {
        console.log(this.state.selected.length);
        let cardId = event.target.id;
        if (this.state.selected.includes(cardId)) {
            this.loseGame();
        } else {
            this.state.clicked.push(cardId);
            let score = this.state.score + 1;
            let topScore = score > this.state.topScore ? score : this.state.topScore;
            this.setState({
                score,
                topScore
            });
            if (this.state.selected.length === 12) {
                this.winGame();
            }
            this.randomizeCards();
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        {this.state.cards.map((card, i) => {
                            return (
                                <Card
                                    clickCard={this.handleCardClick.bind(this)}
                                    id={card.id}
                                    key={card.id}
                                    image={card.image}
                                    clicked={this.clicked}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;