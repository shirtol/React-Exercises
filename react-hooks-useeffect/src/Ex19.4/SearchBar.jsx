import React, { useState } from "react";

const SearchBar = ({ onInputChange, userInput }) => {
    const changeAvatarsList = ({ target: { value } }) => {
        onInputChange(value);
    };

    return (
        <div className="form-container">
            <div className="field">
                <label></label>
                <input
                    type="search"
                    placeholder="enter a name"
                    value={userInput}
                    onChange={changeAvatarsList}
                ></input>
            </div>
        </div>
    );
};

export default SearchBar;
