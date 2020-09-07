import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from "@blueprintjs/core";
import {NavbarExample} from './Components/Navbar'
import {TableReorderable} from "./Components/Table";
import {MyPanel} from "./Components/Panel";
import "@blueprintjs/core/lib/scss/variables.scss"
function App() {
  return (
<div className="flex-box bp3-dark">
      <div className="flex-container">
          <div><header className="header">
              <NavbarExample/>
          </header>
          </div>
          <div>
              <div className="flex-container2">
                  <div className="side-left"><MyPanel /></div>
                  <div className="main"><TableReorderable/></div>
                  <div className="side-right">5</div>
              </div>
          </div>
          <div>footer</div>

      </div>
</div>

  );
}

export default App;
