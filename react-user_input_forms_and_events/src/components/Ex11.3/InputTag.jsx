import React from "react";

export default class InputTag extends React.Component {
    render() {
        return (
            <div className="text-tag-container">
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
