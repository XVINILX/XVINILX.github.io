import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import { getData } from "./services/animalMovement";

function App() {
  const onClick = async () => {
    console.log("value");
    console.log(await getData());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <Button onClick={onClick}>Botão</Button>
        </p>
      </header>
    </div>
  );
}

export default App;
