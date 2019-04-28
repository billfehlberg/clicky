import React from "react";
import "./style.css";

function PScore(props) {
  return <h1 className="Pscore">{props.children}</h1>;
}

export default PScore;