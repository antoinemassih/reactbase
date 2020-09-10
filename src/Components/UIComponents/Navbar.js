import React, { Component } from 'react';

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

import * as useHistory from "react-router-redux";
import {Link} from "react-router-dom";
import {ChartPage} from "../Pages/ChartPage";


export class NavbarExample extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

    }

    dispatchNewRoute(route) {
        useHistory.push(route);
        this.setState({
            open: false,
        });

    }


    handleClickOutside() {
        this.setState({
            open: false,
        });
    }

    openNav() {
        this.setState({
            open: true,
        });
    }
     render() {

        return (

                <Navbar>
                    <NavbarGroup align={Alignment.LEFT}>
                        <Icon icon="layers" iconSize="20" />
                        <NavbarDivider />
                        <NavbarHeading><b>LevelTrader</b></NavbarHeading>
                        <NavbarDivider />
                        <div className="bp3-navbar-group bp3-align-left">
                        <Button className={Classes.MINIMAL} icon="home" text="Home" />
                        <Link to="ChartPage"><Button className={Classes.MINIMAL} icon="timeline-area-chart" text="Charts"/></Link>
                        <Link to="WatchListPage"><Button className={Classes.MINIMAL} icon="list" text="Watch list" /></Link>
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