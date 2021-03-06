import React from "react";

export default class InputTag extends React.Component {
    render() {
        return (
            <div className="field">
                <label>{this.props.inputLabel}</label>
                <input
                    type="text"
                    onChange={this.props.whenInputChange}
                    value={this.props.inputValue}
                ></input>
            </div>
        );
    }
}
