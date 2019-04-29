import React from "react";
import "./style.css";


function PlanetCard(props) {
  return (
    <div className="card">
      <div onClick={() => props.handleClick(props.id) } className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlanetCard;