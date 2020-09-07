import * as React from "react";
import { Button, IPanelProps, PanelStack } from "@blueprintjs/core";

export class MyPanel extends React.Component<IPanelProps> {
     render() {
        return <Button text="Settings" />
    }

     openSettingsPanel() {
        // openPanel (and closePanel) are injected by PanelStack
        this.props.openPanel({
            component: SettingsPanel, // <- class or stateless function type
            props: { enabled: true }, // <- SettingsPanel props without IPanelProps
            title: "Settings",        // <- appears in header and back button
        });
    }
}

class SettingsPanel extends React.Component<IPanelProps & { enabled: boolean }> {
    // ...
}

