import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from "@blueprintjs/core";
import {NavbarExample} from './Components/UIComponents/Navbar'
import {TableReorderable} from "./Components/UIComponents/Table";
import {MyPanel} from "./Components/UIComponents/Panel";
import {Rightpane} from "./Components/UIComponents/rightpane";
import "@blueprintjs/core/lib/scss/variables.scss"
function App() {
  return (
<div className="flex-box bp3-dark">
      <div className="flex-container">
          <div><header className="header">
              <NavbarExample/>
          </header>
          </div>
          <div className="main-pane">
              <div className="flex-container2">
                  <div className="side-left"><MyPanel /></div>
                  <div className="main"><TableReorderable/></div>
                  <div className="side-right"><Rightpane></Rightpane></div>
              </div>
          </div>
          <div className="app-footer">footer</div>

      </div>
</div>

  );
}

export default App;
