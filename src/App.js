import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from "@blueprintjs/core";
import {NavbarExample} from './Components/Navbar'
import {TableReorderable} from "./Components/Table";
import "@blueprintjs/core/lib/scss/variables.scss"
function App() {
  return (

      <div className="App">
          <NavbarExample/>
<div>

    <TableReorderable/>
</div>



    </div>
  );
}

export default App;
