import React, { Component } from "react";
import "./App.css";
import cardInfo from "./cards.json";
import CardImage from "./components/CardImage/CardImage.js";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state = {
    cardInfo,
    score: 1,
    topScore: 0
  };

addScore = () => {
  this.setState({ score: this.state.score + 1 });
  {cards: this.state.cards.clicked}
  console.log(this.state.score);
  
  console.log();
};

endGame = () => {};

gameLogic = () => {};

  randomizeImages = () => {
    const cardInfo = this.state.cardInfo.sort(image => {
      return 0.5 - Math.random();
    });
    this.setState({ cardInfo });
  };



  render() {
    return (
      <div>
        <Title />
        <Wrapper>
          {this.state.cardInfo.map(card => (
            <CardImage
              randomizeImages={this.randomizeImages}
              addScore={this.addScore}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;