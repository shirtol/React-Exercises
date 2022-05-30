import React, { useState } from "react";

export const Input = ({ filterCountries }) => {
    const [userInput, setUserInput] = useState("");

    const onInputChange = ({ target: { value } }) => {
        setUserInput(value);
        filterCountries(value);
    };

    return (
        <input
            placeholder="enter a country..."
            onChange={onInputChange}
            value={userInput}
        ></input>
    );
};
