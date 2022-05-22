import React, { Component } from "react";

export default class SearchBar extends Component {
    changeAvatarsList = (e) => {
        this.props.onInputChange(e.target.value);
    };
    render() {
        return (
            <div className="form-container">
                <div className="field">
                    <label></label>
                    <input
                        type="search"
                        placeholder="enter a name"
                        value={this.props.value}
                        onChange={this.changeAvatarsList}
                    ></input>
                </div>
            </div>
        );
    }
}
