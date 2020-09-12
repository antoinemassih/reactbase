
import * as React from "react";

import {Callout} from "@blueprintjs/core";

export default class AlertComponent extends React.PureComponent{

     render() {

        return (

                <Callout title="Hello">
                    The component is a simple wrapper around the CSS API that provides props for modifiers and optional
                    title element. Any additional HTML props will be spread to the rendered
                    element.
                </Callout>

        );
    }

}