import React from "react";

export default class TextAreaTag extends React.Component {
    render() {
        return (
            <label>
                {this.props.labelText}
                <textarea
                    value={this.props.textAreaValue}
                    onChange={this.props.whenTextAreaChange}
                ></textarea>
            </label>
        );
    }
}
