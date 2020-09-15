import * as React from "react";
import './pageStyles/HotlistPage.scss'
import AlertComponent from "../UIComponents/Callouts/AlertComponent";
import AlertPanelComponent from "../UIComponents/Callouts/AlertPanel";


export class HotlistPage extends React.PureComponent{

    constructor() {
        super();
    }

    render() {

        return (


                <div className="flex-container2">
<div>
    <AlertPanelComponent/>
</div>

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