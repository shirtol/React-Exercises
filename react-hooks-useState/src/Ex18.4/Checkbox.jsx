import React from "react";

const Checkbox = ({ checked, value, onClick }) => {
    const onInputChange = () => {
        onClick(value);
    };

    return (
        <>
            <li>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onInputChange}
                ></input>
                <label>{value}</label>
            </li>
        </>
    );
};

export default Checkbox;
