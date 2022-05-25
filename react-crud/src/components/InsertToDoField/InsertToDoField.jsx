import React, { Component } from "react";

export default class InsertToDoField extends Component {
    render() {
        return (
            <div>
                <input
                    placeholder="insert new task..."
                    value={this.props.task}
                    onChange={this.props.onChangeInput}
                    id="task"
                ></input>
                <button onClick={this.props.onAddItem}>ADD</button>
            </div>
        );
    }
}
