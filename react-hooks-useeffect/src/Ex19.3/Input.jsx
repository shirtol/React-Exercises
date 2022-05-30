import React, { useState } from "react";
import SearchBtn from "./SearchBtn";

const Input = ({ onSearchClick }) => {
    const [inputValue, setInputValue] = useState("hooks");

    const onInputChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    return (
        <div>
            <input
                placeholder="Search..."
                onChange={onInputChange}
                value={inputValue}
            ></input>
            <SearchBtn
                onSearchClick={() => onSearchClick(inputValue)}
            ></SearchBtn>
        </div>
    );
};

export default Input;
