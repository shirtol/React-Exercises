import React from "react";

const SearchBar = ({ value, onKeyPress, onChange }) => {
    return (
        <input
            placeholder="enter a category"
            value={value}
            onKeyPress={onKeyPress}
            onChange={(e) => onChange(e.target.value)}
        ></input>
    );
};

export default SearchBar;
