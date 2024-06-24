import logo from "./logo.svg";
import React from "react";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <ButtonComponent text="Bottone" />
        <ImageComponent
          src="https://i.insider.com/602ee9ced3ad27001837f2ac?width=1000&format=jpeg&auto=webp"
          alt="Rickrolld"
          width="300px"
          height="210px"
        />
      </div>
    </div>
  );
}

export default App;
