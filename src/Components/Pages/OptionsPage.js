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

    makeBar(open,low,high,close,two,bar,min,max){
        var width = 15;
        var ycoefficient = (two.height)/(max);
        var actual_low = two.height - ycoefficient*low+min;
        var actual_high = two.height - ycoefficient*high+min;
        var actual_close = two.height - ycoefficient*close+min;
        var actual_open = two.height - ycoefficient*open+min;
        var barplacement = bar*width + bar*width/2;

        var line = two.makeLine(barplacement,actual_close,barplacement,actual_open);
        var line2 = two.makeLine(barplacement,actual_low,barplacement,actual_high);
        line.stroke = '#FF8000';
        line.linewidth = width;
        //line.cap = "round";
        line2.stroke = '#FF8000';
        line2.linewidth = width/5;
        line2.cap = "round";
        return two;

    }

    drawGrid(two){


        var yBottom = two.height-10;
        var yTop = 10;
        var xRight = two.width-10;
        var xLeft = 10;
        var xGridLine = two.makeLine(xLeft,yBottom,xRight,yBottom);
        var yGridLine = two.makeLine(10,yTop,10,yBottom);

        xGridLine.stroke = "white";
        yGridLine.stroke = "white";


        return two;
    }

    plotGraph(olhc,two,min,max){
        for (var i = 0; i < olhc.length; i++) {
            two = this.makeBar(olhc[i][1],olhc[i][2],olhc[i][3],olhc[i][4],two,(i+1),min,max);
        }
        two.makeLine(10,max,800,max);
        two.makeLine(10,min,800,min);
        return two;


    }

    getData(){
        var xmlHttp = new XMLHttpRequest();
        return xmlHttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var myObj = JSON.parse(this.responseText);
                return myObj;
            }
        };


    }
    componentDidMount(){
        const elem = document.getElementById('draw-shapes');
        const height = elem.clientHeight;
        const width = elem.clientWidth;
        const params = { width: 1600, height: 800 };
        var two = new Two(params).appendTo(elem);

        var olhc = [
            [1506902400000,154.26,154.45,152.72,153.81],
            [1506988800000,154.01,155.09,153.91,154.48],
            [1507075200000,153.63,153.86,152.46,153.48],
            [1507161600000,154.18,155.44,154.05,155.39],
            [1507248000000,154.97,155.49,154.56,155.30],
            [1507507200000,155.81,156.73,155.48,155.84],
            [1507593600000,156.06,158.00,155.10,155.90],
            [1507680000000,155.97,156.98,155.75,156.55],
            [1507766400000,156.35,157.37,155.73,156.00],
            [1507852800000,156.73,157.28,156.41,156.99],
            [1508112000000,157.90,160.00,157.65,159.88],
            [1508198400000,159.78,160.87,159.23,160.47],
            [1508284800000,160.42,160.71,159.60,159.76],
            [1508371200000,156.75,157.08,155.02,155.98],
            [1508457600000,156.61,157.75,155.96,156.25],
            [1508716800000,156.89,157.69,155.50,156.17],
            [1508803200000,156.29,157.42,156.20,157.10],
            [1508889600000,156.91,157.55,155.27,156.41],
            [1508976000000,157.23,157.83,156.78,157.41],
            [1509062400000,159.29,163.60,158.70,163.05],
            [1509321600000,163.89,168.07,163.72,166.72],
            [1509408000000,167.90,169.65,166.94,169.04],

            [1509494400000,169.87,169.94,165.61,166.89],
            [1509580800000,166.60,168.50,165.28,168.11],
            [1509667200000,174.00,174.26,171.12,172.50],
            [1509926400000,172.36,174.99,171.72,174.25],
            [1510012800000,173.91,175.25,173.60,174.81],
            [1510099200000,174.66,176.24,174.33,176.24],
            [1510185600000,175.11,176.10,173.14,175.88],
            [1510272000000,175.11,175.38,174.27,174.67],
            [1510531200000,173.50,174.50,173.40,173.97],
            [1510617600000,173.04,173.48,171.18,171.34],
            [1510704000000,169.97,170.32,168.38,169.08],
            [1510790400000,171.18,171.87,170.30,171.10],
            [1510876800000,171.04,171.39,169.64,170.15],
            [1511136000000,170.29,170.56,169.56,169.98],
            [1511222400000,170.78,173.70,170.78,173.14],
            [1511308800000,173.36,175.00,173.05,174.96],
            [1511481600000,175.10,175.50,174.65,174.97],
            [1511740800000,175.05,175.08,173.34,174.09],
            [1511827200000,174.30,174.87,171.86,173.07],
            [1511913600000,172.63,172.92,167.16,169.48],
            [1512000000000,170.43,172.14,168.44,171.85],

            [1512086400000,169.95,171.67,168.50,171.05],
            [1512345600000,172.48,172.62,169.63,169.80],
            [1512432000000,169.06,171.52,168.40,169.64],
            [1512518400000,167.50,170.20,166.46,169.01],
            [1512604800000,169.03,170.44,168.91,169.32],
            [1512691200000,170.49,171.00,168.82,169.37],
            [1512950400000,169.20,172.89,168.79,172.67],
            [1513036800000,172.15,172.39,171.46,171.70],
            [1513123200000,172.50,173.54,172.00,172.27],
            [1513209600000,172.40,173.13,171.65,172.22],
            [1513296000000,173.63,174.17,172.46,173.97],
            [1513555200000,174.88,177.20,174.86,176.42],
            [1513641600000,174.99,175.39,174.09,174.54],
            [1513728000000,174.87,175.42,173.25,174.35],
            [1513814400000,174.17,176.02,174.10,175.01],
            [1513900800000,174.68,175.42,174.50,175.01],
            [1514246400000,170.80,171.47,169.68,170.57],
            [1514332800000,170.10,170.78,169.71,170.60],
            [1514419200000,171.00,171.85,170.48,171.08],
            [1514505600000,170.52,170.59,169.22,169.23]
        ];
        const max = Math.max.apply(Math,olhc.map(function(o){return o[2];}))
        const min = Math.min.apply(Math,olhc.map(function(o){return o[3];}))
       two = this.plotGraph(olhc,two,min,max);
       two = this.drawGrid(two);


        two.update();
    }

    render() {

        return (
            <div id="draw-shapes">

            </div>

        );
    }
}