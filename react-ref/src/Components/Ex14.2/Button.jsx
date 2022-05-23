import React from "react";

const Button = ({ text, onBtnClick }) => {
    return <button onClick={onBtnClick}>{text}</button>;
};

export default Button;
