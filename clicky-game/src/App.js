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

  handleClick = (id) => {
    console.log(this.state.cardInfo)
    let cardInfo = [...this.state.cardInfo]
    for(let i = 0; i < cardInfo.length; i++){
      if(cardInfo[i].id === id){
        if (cardInfo[i].clicked){
          this.handleIncorrectGuess(cardInfo);
        } else {
          cardInfo[i].clicked = true;
          this.handleCorrectGuess(cardInfo);
        }
      }
    }
  }

  handleCorrectGuess = cardArrayVal => {
    console.log(cardArrayVal);
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      cardInfo: cardArrayVal,
      score: newScore,
      topScore: newTopScore
    });

    this.randomizeImages();
  };

  handleIncorrectGuess = (card) => {
    this.setState({
      cardInfo: this.resetData(card),
      score: 0
    });
  };

  resetData = cardInfoArray => {
    console.log(cardInfoArray)
    let resetData = cardInfoArray.forEach(card => card.clicked = false)
    console.log(resetData);
    return resetData;
  };

  randomizeImages = () => {
    let randomizedArray = [...this.state.cardInfo]
    randomizedArray = randomizedArray.sort(image => {
      return 0.5 - Math.random();
    });
    this.setState({ cardInfo: randomizedArray });
  };

  render() {
    return (
      <div>
        <Title />
        <Wrapper>
          {this.state.cardInfo.map(card => (
            <CardImage
              handleClick={this.handleClick}
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