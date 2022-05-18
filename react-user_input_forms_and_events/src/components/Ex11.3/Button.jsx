import React from "react";

export default class Button extends React.Component {
    onButtonClick = () => this.props.WhenButtonClick(this.props.btnName);
    render() {
        return (
            <button
                className={`ui button ${this.props.btnName}`}
                onClick={this.onButtonClick}
            >
                {this.props.btnName}
            </button>
        );
    }
}
