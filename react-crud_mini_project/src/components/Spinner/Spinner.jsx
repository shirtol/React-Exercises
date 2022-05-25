import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className="ui segment my-spinner">
            <div className="ui active inverted dimmer">
                <div className="ui big text loader">Loading</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
};

export default Spinner;
