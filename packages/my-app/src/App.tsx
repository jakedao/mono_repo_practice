import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { StyledButton, StyledHeader } from "ui-components";

function App() {
  return (
    <div className="App">
      <div>This is lerna</div>
      <StyledHeader text="LERNA" textColor="green" />
      <StyledButton
        text="Click me"
        handleClick={() => console.log("You clicked")}
      />
    </div>
  );
}

export default App;
