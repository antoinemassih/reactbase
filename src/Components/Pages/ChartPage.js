import * as React from "react";
import Plotly from "../UIComponents/Chart/PlotlyComponent";
import {Table} from "@blueprintjs/table";
import AlertPanelComponent from "../UIComponents/Callouts/AlertPanel";
import {TableReorderable} from "../UIComponents/Table";
import {Rightpane} from "../UIComponents/rightpane";

export class ChartPage extends React.Component {

    constructor() {
        super();
    }
    render() {

        return (
            <div className="flex-container2">
                <div className="side-left"><AlertPanelComponent/></div>
                <div className="main">
                    <div>
                    <Plotly/>
                    </div>
                </div>
                <div className="side-right"><Rightpane></Rightpane></div>
            </div>

        );
    }
}