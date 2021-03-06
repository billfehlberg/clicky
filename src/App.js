import React, { Component } from 'react';
import './App.css';
import PlanetCard from "./components/PlanetCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import PScore from "./components/PScore";
import TScore from "./components/TScore";
import Footer from "./components/Footer";
import Planets from "./planets.json";
import Title from "./components/Title";

function shufflePlanets(array) {
 for (let i = array.length - 1; i > 0; i--) {
   let j = Math.floor(Math.random() * (i + 1));
   [array[i], array[j]] = [array[j], array[i]];
 }
 return array;
};


class App extends Component {
  state = {
    Planets,
    score: 0,
    topScore: 0,
    message: "Pick Any Planet To Begin",
    clicked: []
  };
  componentDidMount() {
    this.handleShuffle();
  }

  handleClick = (id) => {
    if (this.state.clicked.indexOf(id) === -1)  {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat([id])});
    } else  {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      message: "correct select another planet"
    });
    if (newScore >= this.state.topScore)  {
      this.setState({ topScore: newScore })
    }
    if (newScore === 9) {
      this.setState({ message: "you beat the game, select a planet begin again" });
    }
    this.handleShuffle();
  }

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clicked: [],
      message: "Game Over. Please select a planet to begin"
    })
  };

  handleShuffle = () => {
    let shuffledPlanets = shufflePlanets(Planets);
    this.setState({ Planets: shuffledPlanets });
  };

  render() {
    return (
      <Wrapper>
          <div className="container">
            <div className="row topRow rounded-top bg-secondary text-center">
              <div className="col"><Navbar>Planet <br></br>Clicker</Navbar></div>
              <div className="col-5 Title"><Navbar>{this.state.message}</Navbar></div>
              <div className="col bg-info"><PScore>Player Score: {this.state.score} </PScore></div>
              <div className="col bg-info"><TScore>Top Score: {this.state.topScore}</TScore></div>
            </div>
            <div className="row titleRow bg-primary text-center">
              <div className="col"><Title></Title></div>
            </div>
            <div className="row bg-secondary d-flex justify-content-center">
            {this.state.Planets.map(planet => (
                <PlanetCard 
                  handleClick={this.handleClick}
                  id={planet.id}
                  key={planet.id}
                  name={planet.name}
                  image={planet.image}
                  />
              ))}
            </div>
            <div className="row bg-primary rounded-bottom text-center">
              <div className="col"><Footer>Bill Fehlberg</Footer></div>
            </div>
          </div>
        </Wrapper>
    );
  }
}

export default App;

