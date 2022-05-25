import React, { Component } from "react";

export default class User extends Component {
    state = {
        isInUpdateMode: false,
        updatedDescriptionValue: this.props.description,
    };

    handleUpdatePost = () => {
        if (this.state.updatedDescriptionValue !== this.props.description) {
            this.props.onUpdatePost(
                this.props.id,
                this.state.updatedDescriptionValue
            );
        }
        this.setState((prevState) => ({
            isInUpdateMode: !prevState.isInUpdateMode,
        }));
    };

    handleDescriptionChange = ({ target }) => {
        this.setState({ updatedDescriptionValue: target.value });
    };

    render() {
        return (
            <div className="card">
                <div className="content">
                    <img
                        className="right floated mini ui image"
                        alt="#"
                        src={this.props.img}
                    ></img>
                    <div className="header">
                        {this.props.first} {this.props.last}
                    </div>
                    {this.state.isInUpdateMode ? (
                        <div className="ui form">
                            <div className="field">
                                <label>Update Post</label>
                                <textarea
                                    value={this.state.updatedDescriptionValue}
                                    onChange={this.handleDescriptionChange}
                                ></textarea>
                            </div>
                        </div>
                    ) : (
                        <div className="description">
                            {this.props.description}
                        </div>
                    )}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div
                            className="ui basic green button"
                            onClick={() => this.handleUpdatePost()}
                        >
                            {this.state.isInUpdateMode
                                ? "Save"
                                : "Update Your Post"}
                        </div>
                        <div
                            className="ui basic red button"
                            onClick={() =>
                                this.props.onDeletePost(this.props.id)
                            }
                        >
                            Delete Post
                        </div>
                    </div>
                </div>
            </div>
        );
        {
            /* <div>
                <img alt="#" src={this.props.img}></img>
                <h3>
                    
                </h3>
                {this.state.isInUpdateMode ? (
                    <input
                        value={this.state.updatedDescriptionValue}
                        onChange={this.handleDescriptionChange}
                    ></input>
                ) : (
                    <p>{this.props.description}</p>
                )}

                <button
                    className="ui primary button"
                    onClick={() =>
                        this.handleUpdatePost(this.props.id, "I was updated!!")
                    }
                >
                    Update Your Post
                </button>
                <button
                    className="ui button"
                    onClick={() => this.props.onDeletePost(this.props.id)}
                >
                    Delete Your Post
                </button>
            </div> */
        }
    }
}
