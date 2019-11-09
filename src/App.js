import React, { Component } from 'react';
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import cards from "./cards.json";
import style from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      cards: cards,
      clicked: [],
      message: "Click a card to begin!"
    };
  }

  // Randomize the cards before the component mounts
  componentWillMount() {
    this.randomizeCards();
    console.log(this.state);
  }

  // Function to reset the game state
  resetGame = () => {
      this.setState({
          score: 0,
          clicked: [],
          message: "Click a card to begin!"
      });
      this.randomizeCards();
  }

  // Function for if the user loses the game
  loseGame = () => {
      this.setState({
        message: "GAME OVER!"
      });
  }

  // function for if the user wins the game
  winGame = () => {
      this.setState({
        message: "YOU WIN! TREAT YO' SELF!"
      });
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
  handleCardClick = event => {
      let cardId = event.target.id;
      if (this.state.clicked.includes(cardId)) {
          this.loseGame();
          this.setState({
            clicked: [],
            score: 0
          });
      } else {
          this.state.clicked.push(cardId);
          let score = this.state.score + 1;
          let topScore = score > this.state.topScore ? score : this.state.topScore;
          this.setState({
              score,
              topScore,
              message: "Good choice!"
          });
          if (this.state.clicked.length === 12) {
              this.winGame();
              this.setState({
                clicked: [],
                score: 0
              });
          }
          this.randomizeCards();
      }
  }
  
  render() {
    return(
      <main>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Hero />
        <Container>
          <Row>
            <Column>
              {this.state.cards.map((card, i)  => {
                return(
                  <Card
                      handleCardClick={this.handleCardClick.bind(this)}
                      id={card.id}
                      key={card.id}
                      image={card.image}
                      clicked={card.clicked}
                  />
                )})}
            </Column>
          </Row>
        </Container>
      <Footer />
    </main>
    );
  }
}

export default App;
