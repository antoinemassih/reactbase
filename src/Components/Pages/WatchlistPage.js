import * as React from "react";

import {
    Alignment,
    Button,
    Classes,Icon,
} from "@blueprintjs/core";
import {MyPanel} from "../UIComponents/Panel";
import {TableReorderable} from "../UIComponents/Table";
import {Rightpane} from "../UIComponents/rightpane";


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
            <div className="side-left"><MyPanel/></div>
        <div className="main"><TableReorderable/></div>
        <div className="side-right"><Rightpane></Rightpane></div>
    </div>

        );
    }
}