import React from "react";

export default class SelectTagOption extends React.Component {
    render() {
        return (
            <option value={this.props.textValue}>{this.props.textValue}</option>
        );
    }
}
