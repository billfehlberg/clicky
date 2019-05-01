import React from "react";
import "./style.css";

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
const Title = props => (
  <div className="titleText">
    <h3>Select any planet only once. Select all 9 correctly and you win!!!</h3>
  </div>
);

export default Title;