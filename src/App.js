import React, { Component }from 'react';
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Game from "./components/Game";
import Navbar from "./components/Navbar";

class App extends Component {
  
  render() {
    return(
      <div>
        <Navbar />
        <Hero />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
