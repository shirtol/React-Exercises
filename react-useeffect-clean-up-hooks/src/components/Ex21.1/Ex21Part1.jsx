import React, { useState, useRef, useEffect } from "react";

const Ex21Part1 = () => {
    const [isInputOpen, setIsInputOpen] = useState(false);
    const [btnText, setBtnText] = useState("edit");
    const inputRef = useRef();

    const focus = () => {
        inputRef.current?.focus();
    };

    useEffect(() => focus());

    const onBtnClick = () => {
        setIsInputOpen((prev) => !prev);
        const buttonText = btnText === "edit" ? "save" : "edit";
        setBtnText(buttonText);
        focus();
    };

    return (
        <div>
            {isInputOpen && <input ref={inputRef}></input>}
            <button onClick={onBtnClick}>{btnText}</button>
        </div>
    );
};

export default Ex21Part1;
