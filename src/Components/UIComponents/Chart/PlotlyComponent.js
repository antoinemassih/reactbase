import React from 'react';
import PlotComponent from 'react-plotly.js'
/* Always remember to capitalize your Component names*/
export default class PlotlyComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
            <PlotComponent
                data={[
                    {
                        x: [1, 2, 3,2,3,4,5,2,1,2,3,2,2],
                        y: [2, 6, 3,7,8,7,8,7,8,7,8,7,7],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3,2,3,4,5,2,1,2,3,2,2], y: [2, 6, 3,7,8,7,8,7,8,7,8,7,7]},
                ]}
                layout={ {autosize:"True",
                    width:1500,
                    height:800,


                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)'} }
            />
            </div>
        );
    }
}


