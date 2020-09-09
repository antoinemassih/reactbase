import * as React from "react";

import {
    Alignment,
    Button,
    Classes,Icon,
} from "@blueprintjs/core";


export class OptionsPage extends React.PureComponent<IExampleProps, IExampleState> {
    state: IExampleState = {
        stateExample: false,
    };
    constructor() {
        super();
    }
    render() {

        return (
            <div>OptionsPage</div>

        );
    }
}