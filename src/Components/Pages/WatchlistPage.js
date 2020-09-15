import * as React from "react";

import {
    Alignment,
    Button,
    Classes,Icon,
} from "@blueprintjs/core";
import {MyPanel} from "../UIComponents/Panel";
import {TableReorderable} from "../UIComponents/Table";
import {Rightpane} from "../UIComponents/rightpane";
import AlertPanelComponent from "../UIComponents/Callouts/AlertPanel";


export class WatchlistPage extends React.PureComponent<IExampleProps, IExampleState> {
    state: IExampleState = {
        stateExample: false,
    };
    constructor() {
        super();
    }
    render() {

        return (
            <div className="flex-container2">
            <div className="side-left"><AlertPanelComponent/></div>
        <div className="main">
            <div>
                <TableReorderable/>
            </div>
            <div>
                <TableReorderable/>
            </div>
        </div>
        <div className="side-right"><Rightpane></Rightpane></div>
    </div>

        );
    }
}