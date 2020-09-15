import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import '@blueprintjs/core/src/blueprint.scss'
import '@blueprintjs/icons/resources/icons/icons-16.eot'
import '@blueprintjs/icons/src/blueprint-icons.scss'
import '@blueprintjs/table/src/table.scss'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import history from './utils/history';



import {App} from "./App";


ReactDOM.render(
<Router history={history} >

    <App/>

</Router>
       ,
    document.getElementById('root')
);


serviceWorker.unregister();
