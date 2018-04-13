import React, { Component } from "react";
import "./App.css";
import cardInfo from "./cards.json";
import ImageCard from "./components/CardImage/CardImage.js";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state = {
    cardInfo
  };

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
            <ImageCard
              randomizeImages={this.randomizeImages}
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