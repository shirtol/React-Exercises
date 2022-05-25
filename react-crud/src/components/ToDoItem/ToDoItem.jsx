import React, { Component } from "react";
import "./ToDoItem.css";

export default class ToDoItem extends Component {
    state = { todo: "" };

    onTaskInputChange = ({ target }) => {
        this.setState({ todo: target.value });
    };
    render() {
        return (
            <div className="todo-item-container card">
                <div className="todo-task-container">
                    <h3 className="todo-task">{this.props.todoTask}</h3>
                </div>

                <div className="input-buttons-field">
                    <div className="ui input focus">
                        <input
                            placeholder="update this task"
                            onChange={this.onTaskInputChange}
                            value={this.state.todo}
                        ></input>
                    </div>
                    <div className="buttons-container">
                        <button
                            className="ui button  negative"
                            onClick={() =>
                                this.props.onDeleteItem(this.props.id)
                            }
                        >
                            Delete
                        </button>
                        <button
                            className="ui button"
                            onClick={() =>
                                this.props.OnUpdateItem(
                                    this.props.id,
                                    this.state.todo
                                )
                            }
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
