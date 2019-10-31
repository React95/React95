import React from "react";
import { Button, GlobalStyle } from "@react95/core";
import logo from "./windows95_logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <Button>React95 Example</Button>
      </header>
    </div>
  );
}

export default App;
