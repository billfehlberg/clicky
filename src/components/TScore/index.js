import React from "react";
import "./style.css";

function TScore(props) {
  return <h1 className="Tscore">{props.children}</h1>;
}

export default TScore;