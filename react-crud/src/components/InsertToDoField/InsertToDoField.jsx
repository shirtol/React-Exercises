import React, { Component } from "react";
import "./InsertToDoField.css";

export default class InsertToDoField extends Component {
    render() {
        return (
            <div className="todo-field-insert">
                <div className="ui input focus">
                    <input
                        placeholder="insert new task..."
                        value={this.props.task}
                        onChange={this.props.onChangeInput}
                        id="task"
                    ></input>
                </div>
                <button
                    onClick={this.props.onAddItem}
                    className="positive ui button"
                >
                    ADD
                </button>
            </div>
        );
    }
}
