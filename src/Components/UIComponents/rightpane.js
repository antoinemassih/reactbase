
import * as React from "react";

import { Button, ButtonGroup, Divider, H5, Switch } from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";

export interface IDividerExampleState {
    vertical: boolean;
}

export class Rightpane extends React.PureComponent<IExampleProps, IDividerExampleState> {
     state: IDividerExampleState = { vertical: false };

     handleVerticalChange = handleBooleanChange(vertical => this.setState({ vertical }));

     render() {

        return (
            <Example>
                <ButtonGroup minimal={true} vertical={true}>
                    <Button text="File" />
                    <Button text="Edit" />
                    <Divider />
                    <Button text="Create" />
                    <Button text="Delete" />
                    <Divider />
                    <Button icon="add" />
                    <Button icon="remove" />
                </ButtonGroup>
            </Example>
        );
    }
}

