import * as React from "react";
import Two from "two.js"

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

    componentDidMount(){

        // Make an instance of two and place it on the page.
        const elem = document.getElementById('draw-shapes');
        const params = {width: 285, height: 200};
        const two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
        const circle = two.makeCircle(72, 100, 50);
        const rect = two.makeRectangle(213, 100, 100, 100);

// The object returned has many stylable properties:
        circle.fill = '#FF8000';
        circle.stroke = 'orangered'; // Accepts all valid css color
        circle.linewidth = 5;

        rect.fill = 'rgb(0, 200, 255)';
        rect.opacity = 0.75;
        rect.noStroke();

// Don't forget to tell two to render everything
// to the screen
        two.update();
    }

    render() {

        return (
            <div id="draw-shapes">

            </div>

        );
    }
}