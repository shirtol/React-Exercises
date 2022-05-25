import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
    render() {
        return (
            <div class="ui form">
                <div class="five fields">
                    <div class="field">
                        <label>First name</label>
                        <input
                            id="newUserFirstName"
                            onChange={this.props.onInputChange}
                            value={this.props.firstName}
                            placeholder="First Name"
                        ></input>{" "}
                    </div>
                    <div class="field">
                        <label>Last name</label>
                        <input
                            id="newUserLastName"
                            onChange={this.props.onInputChange}
                            value={this.props.lastName}
                            placeholder="Last Name"
                        ></input>
                    </div>
                    <div class="field">
                        <label>Image</label>
                        <input
                            type="url"
                            pattern="https://.*"
                            id="newUserImage"
                            onChange={this.props.onInputChange}
                            value={this.props.image}
                            placeholder="Profile Image"
                        ></input>
                    </div>
                    <div class="field">
                        <label>Post</label>
                        <input
                            id="newUserPost"
                            onChange={this.props.onInputChange}
                            value={this.props.post}
                            placeholder="What are you thinking?..."
                        ></input>
                    </div>
                </div>
                <div
                    className="ui vertical animated button"
                    onClick={this.props.onPostButtonClick}
                >
                    <div className="visible content">Post</div>
                    <div className="hidden content">
                        <i className="save icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}
