import { TransitionGroup  } from 'react-transition-group';
import * as React from "react";

import AlertComponent from "./AlertComponent";

export default class AlertPanelComponent extends React.PureComponent{

    constructor(props) {
        super(props);
    this.state= {
        links : [
            {endpoint: 'NVDA', mode: 'This is the first alert', intent: 'success'},
            {endpoint: 'AAPL', mode: 'This is the second alert ', intent: 'warning'},
            {endpoint: 'MSFT', mode: 'This is the third alert', intent: 'danger'},
            {endpoint: 'GOOG', mode: 'this is the fourth alert', intent: 'success'},
            {endpoint: 'NFLX', mode: 'This is the first alert', intent: 'success'},
            {endpoint: 'SNAP', mode: 'This is the second alert ', intent: 'warning'},
            {endpoint: 'JPM', mode: 'This is the third alert', intent: 'danger'}
            ]
        }
        this.addAlert = this.addAlert.bind(this);
        this.removeAlert = this.removeAlert.bind(this);


    }

    addAlert(){
        console.log(this.state.links)
        this.setState((prevState) => {
            return {
                items: prevState.links.push({ endpoint: 'NFLX',mode:'This is the first alert',intent:'success' })
            };
        });

    }
    removeAlert(){
        this.setState((prevState) => {
            return {
                items: prevState.links.pop()
            };
        });

    }

    render() {
        const listItems = this.state.links.map((link) =>
            <AlertComponent title={link.endpoint} content = {link.mode} intent={link.intent}/>
        );

        return (
            <div>

                <div className="flex-container-sidepanel-narrow">
                    <h4>Alerts</h4>
                    <div>
                        <button type="button" className="bp3-button bp3-icon-add"  onClick={this.addAlert}>Add </button>
                        <button type="button" className="bp3-button bp3-icon-minus"  onClick={this.removeAlert}>remove </button>
                    </div>
                    <TransitionGroup   transitionName="example"
                                       transitionEnterTimeout={500}
                                       transitionLeaveTimeout={300}>
                    {listItems}
                    </TransitionGroup>
                </div>

            </div>

        );
    }

}