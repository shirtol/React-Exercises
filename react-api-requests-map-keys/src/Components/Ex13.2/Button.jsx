import React, { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <div className="btn-avatar" onClick={this.props.OnSearchBtnClicked}>
                Search
            </div>
        );
    }
}
