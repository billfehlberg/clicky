import React from "react";
import "./style.css";

function Navbar(props) {
  return <h1 className="navbar">{props.children}</h1>;
}

export default Navbar;