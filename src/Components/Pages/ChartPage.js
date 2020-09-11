import * as React from "react";
import Plotly from "../UIComponents/Chart/PlotlyComponent";
import {Table} from "@blueprintjs/table";

export class ChartPage extends React.Component {

    constructor() {
        super();
    }
    render() {

        return (
            <div className="flex-container2" >

                <div>
                    <Plotly/>
                </div>
            </div>

        );
    }
}