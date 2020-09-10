/* eslint new-cap: 0 */

import React from 'react';
import {Redirect, Route, Switch} from 'react-router';

/* containers */
import {App} from './App'
import {ChartPage} from "./Components/Pages/ChartPage";
import {HotlistPage} from "./Components/Pages/HotlistPage";
import {OptionsPage} from "./Components/Pages/OptionsPage";
import {MyPositionsPage} from "./Components/Pages/MyPositionsPage";
import {WatchlistPage} from "./Components/Pages/WatchlistPage";

//import { DetermineAuth } from './components/DetermineAuth';
//import { requireAuthentication } from './components/AuthenticatedComponent';
//import { requireNoAuthentication } from './components/notAuthenticatedComponent';

export default (

    <Switch>
            <Route path="/ChartPage" component={ChartPage}/>
            <Route path="/WatchlistPage" component={WatchlistPage} />
            <Route path="/MyPositions" component={MyPositionsPage} />
            <Route path="/OptionsPage" component={OptionsPage} />
            <Route path="/HotlistPage" component={HotlistPage} />
    </Switch>


);
