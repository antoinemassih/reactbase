import React from 'react';
import './App.scss';
import {NavbarExample} from './Components/UIComponents/Navbar'
import "@blueprintjs/core/lib/scss/variables.scss"

import routes from './routes';


export class App extends React.Component
{
    constructor() {
        super();
    }
    render()
    {
        return (

            <div className="flex-box bp3-dark">
                <div className="flex-container">
                    <div>
                        <header className="header">
                            <NavbarExample/>
                        </header>
                    </div>
                    <div className="main-pane">
                        {routes}
                    </div>
                    <div className="app-footer">footer</div>
                </div>
            </div>

        );
    }
}




