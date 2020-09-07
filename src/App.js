import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from "@blueprintjs/core";

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
        <div>

           <Button intent="success" text="button content" />
        </div>
      </header>
    </div>
  );
}

export default App;
