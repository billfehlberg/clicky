import React from "react";
import "./style.css";

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
const Title = props => (
  <div className="TitleTest">
    <h3>Select any planet to receive a true or false. True increases the score a false response ends the game</h3>
  </div>
);

export default Title;