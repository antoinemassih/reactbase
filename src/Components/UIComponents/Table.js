

import * as React from "react";

import { Switch } from "@blueprintjs/core";
import { Example, handleBooleanChange, IBaseExampleProps, IExampleProps } from "@blueprintjs/docs-theme";
import { Cell, Column, Table, Utils } from "@blueprintjs/table";



const REORDERABLE_TABLE_DATA = [
    ["AAPL", "120", "Ape", "Albania", "Anchorage"],
    ["GOOG", "1600", "Boa", "Brazil", "Boston"],
    ["FB", "289", "Cougar", "Croatia", "Chicago"],
    ["AMZN", "3280", "Deer", "Denmark", "Denver"],
    ["NFLX", "490", "Elk", "Eritrea", "El Paso"],
].map(([letter, fruit, animal, country, city]) => ({ letter, fruit, animal, country, city }));

export class TableReorderable extends React.PureComponent<IExampleProps, ITableReorderableExampleState> {
     state: ITableReorderableExampleState = {
        columns: [
            // these cellRenderers are only created once and then cloned on updates
            <Column key="1" name="Symbol" cellRenderer={this.getCellRenderer("letter")} />,
            <Column key="2" name="Last" cellRenderer={this.getCellRenderer("fruit")} />,
            <Column key="3" name="% Change" cellRenderer={this.getCellRenderer("animal")} />,
            <Column key="4" name="Volume" cellRenderer={this.getCellRenderer("country")} />,
            <Column key="5" name="RSI" cellRenderer={this.getCellRenderer("city")} />,
            <Column key="5" name="Next Level Up" cellRenderer={this.getCellRenderer("pablo")} />,
            <Column key="5" name="Next Level Down" cellRenderer={this.getCellRenderer("esco")} />,
            <Column key="5" name="Score" cellRenderer={this.getCellRenderer("bar")} />,

        ],
        data: REORDERABLE_TABLE_DATA,
        enableColumnInteractionBar: false,
    };

     toggleUseInteractionBar = handleBooleanChange(enableColumnInteractionBar =>
        this.setState({ enableColumnInteractionBar }),
    );

     componentDidUpdate(_nextProps: IBaseExampleProps, nextState: ITableReorderableExampleState) {
        const { enableColumnInteractionBar } = this.state;
        if (nextState.enableColumnInteractionBar !== enableColumnInteractionBar) {
            const nextColumns = React.Children.map(this.state.columns, (column: JSX.Element) => {
                return React.cloneElement(column, { enableColumnInteractionBar });
            });
            this.setState({ columns: nextColumns });
        }
    }

     render() {
        const { enableColumnInteractionBar } = this.state;
        const options = (
            <Switch
                checked={enableColumnInteractionBar}
                label="Interaction bar"
                onChange={this.toggleUseInteractionBar}
            />
        );
        return (
            <Example options={options} showOptionsBelowExample={true} {...this.props}>
                <Table
                    enableColumnReordering={true}
                    enableColumnResizing={false}
                    enableRowReordering={true}
                    enableRowResizing={false}
                    numRows={this.state.data.length}
                    onColumnsReordered={this.handleColumnsReordered}
                    onRowsReordered={this.handleRowsReordered}
                    enableColumnInteractionBar={enableColumnInteractionBar}
                >
                    {this.state.columns}
                </Table>
            </Example>
        );
    }

     getCellRenderer(key: string) {
        return (row: number) => <Cell>{this.state.data[row][key]}</Cell>;
    }

     handleColumnsReordered = (oldIndex: number, newIndex: number, length: number) => {
        if (oldIndex === newIndex) {
            return;
        }
        const nextChildren = Utils.reorderArray(this.state.columns, oldIndex, newIndex, length);
        this.setState({ columns: nextChildren });
    };

     handleRowsReordered = (oldIndex: number, newIndex: number, length: number) => {
        if (oldIndex === newIndex) {
            return;
        }
        this.setState({ data: Utils.reorderArray(this.state.data, oldIndex, newIndex, length) });
    };
}