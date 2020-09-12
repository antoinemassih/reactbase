
import * as React from "react";

import {Callout} from "@blueprintjs/core";
import "./alert.scss"

export default class AlertComponent extends React.PureComponent{
constructor(props) {
    super(props);
    this.content = props.content;
    this.title =props.title;
    this.intent = props.intent;
    this.state = {

    isShow: true
    }

}
     render() {


        return (
    <div>
                <Callout  className="alert-callout" title= {this.title} intent={this.intent}>
                  <div>{this.content}</div>
                </Callout>
    </div>

        );
    }

}