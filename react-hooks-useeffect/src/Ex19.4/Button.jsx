import React from "react";

const Button = ({ OnSearchBtnClicked }) => {
    return (
        <div className="btn-avatar" onClick={OnSearchBtnClicked}>
            Search
        </div>
    );
};

export default Button;
