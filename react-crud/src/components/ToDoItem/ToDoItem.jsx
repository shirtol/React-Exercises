import React, { Component } from "react";
import "./ToDoItem.css";

export default class ToDoItem extends Component {
    state = { todo: "" };

    onTaskInputChange = ({ target }) => {
        this.setState({ todo: target.value });
    };
    render() {
        return (
            <div className="todo-item-container">
                <div className="todo-task-container">
                    <h3 className="todo-task">{this.props.todoTask}</h3>
                </div>

                <div className="input-buttons-field">
                    <input
                        placeholder="update this task"
                        onChange={this.onTaskInputChange}
                        value={this.state.todo}
                    ></input>
                    <div className="buttons-container">
                        <button
                            onClick={() =>
                                this.props.onDeleteItem(this.props.id)
                            }
                        >
                            DELETE
                        </button>
                        <button
                            onClick={() =>
                                this.props.OnUpdateItem(
                                    this.props.id,
                                    this.state.todo
                                )
                            }
                        >
                            UPDATE
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

//!TODO move the "input-buttons-field" to another new component
