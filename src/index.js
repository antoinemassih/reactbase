import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@blueprintjs/core/src/blueprint.scss'
import '@blueprintjs/icons/resources/icons/icons-16.eot'
import '@blueprintjs/icons/src/blueprint-icons.scss'
import '@blueprintjs/table/src/table.scss'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
