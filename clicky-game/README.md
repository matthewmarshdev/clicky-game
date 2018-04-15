# clicky-game
react game

class Game extends React.Component {
  state = {
    //Grabbing json file object (array)
    data,
    // Initial scores
    score: 0,
    topScore: 0
  };

  shuffleArr = () => {
    this.setState({data: this.shuffleData(this.state.data)});
  }

  handleCorrectGuess = newData => {
    const {topScore, score} = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      data: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleIncorrectGuess = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };

  resetData = data => {
    const resetData = data.map(item => ({...item, clicked: false}));
    return this.shuffleData(resetData);
  };

  shuffleData = data => {
    let i = data.length - 1;
    while (i >0) {
      const j = Math.floor(Math.random() * (i));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  }