import * as React from "react";

import {
    Alignment,
    Button,
    Classes,
    H5,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,Icon,
} from "@blueprintjs/core";


export class NavbarExample extends React.PureComponent<IExampleProps, INavbarExampleState> {
     state: INavbarExampleState = {
        alignRight: false,
    };
     render() {
        const { alignRight } = this.state;
        const options = (
            <>
                <H5>Props</H5>
                <Switch checked={alignRight} label="Align right" onChange={this.handleAlignRightChange} />
            </>
        );
        return (

                <Navbar>
                    <NavbarGroup align={alignRight ? Alignment.RIGHT : Alignment.LEFT}>
                        <Icon icon="layers" iconSize="20" />
                        <NavbarDivider />
                        <NavbarHeading><b>LevelTrader</b></NavbarHeading>
                        <NavbarDivider />
                        <div className="bp3-navbar-group bp3-align-left">
                        <Button className={Classes.MINIMAL} icon="home" text="Home" />
                        <Button className={Classes.MINIMAL} icon="timeline-area-chart" text="Charts" />
                        <Button className={Classes.MINIMAL} icon="list" text="Watch list" />
                            <Button className={Classes.MINIMAL} icon="list" text="My Positions" />
                        <Button className={Classes.MINIMAL} icon="layout-hierarchy" text="Options" />
                        <Button className={Classes.MINIMAL} icon="flame" text="Hotlist" />
                        </div>
                        <NavbarDivider />
                        <NavbarHeading>Search</NavbarHeading>
                        <div className="bp3-navbar-group bp3-align-right">
                        <input className="bp3-input" placeholder="Search files..." type="text"/>
                            </div>
                    </NavbarGroup>
                </Navbar>

        );
    }
}