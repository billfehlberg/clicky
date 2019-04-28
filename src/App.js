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


class App extends Component {
  state = {
    Planets,
    score: 0
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };


  render() {
    return (
      <Wrapper>
          <div className="container">
            <div className="row topRow rounded-top bg-secondary text-center">
              <div className="col"><Navbar>Planet <br></br>Clicker</Navbar></div>
              <div className="col Title"><Navbar>Pick Any Planet To Begin</Navbar></div>
              <div className="col bg-info"><PScore>Player Score: {this.state.score} </PScore></div>
              <div className="col bg-info"><TScore>Top Score: </TScore></div>
            </div>
            <div className="row titleRow bg-primary text-center">
              <div className="col"><Title></Title></div>
            </div>
            <div className="row bg-secondary d-flex justify-content-center">
            {this.state.Planets.map(planet => (
                <PlanetCard 
                  handleIncrement={this.handleIncrement}
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

