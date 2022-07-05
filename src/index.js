import React from "react";
import reactDOM from "react-dom";
const name = "Anmol";
const number = Math.floor(Math.random() * 10 + 1);
reactDOM.render(
  <div>
    <h1>Hello my name is {name} </h1>
    <p>My lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
