import * as React from "react";
import TechnicalAnalysis from 'react-tradingview-technical-analysis';
import './pageStyles/HotlistPage.scss'

import {
    Alignment,
    Button,
    Classes,Icon,
} from "@blueprintjs/core";


export class HotlistPage extends React.PureComponent<IExampleProps, IExampleState> {
    state: IExampleState = {
        stateExample: false,
    };
    constructor() {
        super();
    }

    render() {

        return (


                <div className="flex-container2">
                    <div className="TV-TechnicalAnalysis"><TechnicalAnalysis symbol={'AAPL'}/></div>
                    <div className="TV-TechnicalAnalysis"><TechnicalAnalysis symbol={'AMZN'}/></div>
                    <div className="TV-TechnicalAnalysis"><TechnicalAnalysis symbol={'GOOG'}/></div>
                </div>



        );
    }
}

/* Props to remember :

autoSize	bool
false	true, false
colorTheme	enum	light	light, dark
containerId	string	tradingview-widget-container	Any Container Id
height	number	450	Any Number
interval	enum	1m	1m, 5m, 15m, 1h, 4h, 1W, 1M
isTransparent	bool	false	true, false
locale	string	en	Any Locale Code
showIntervalTabs	bool	true	true, false
symbol	string	Required Prop	Any Symbol
width	number	425	Any Number

 */