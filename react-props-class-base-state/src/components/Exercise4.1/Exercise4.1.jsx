import React from "react";

export default class Exercise4Part1 extends React.Component {
    render() {
        return (
            <div className="container">
                <button style={{ fontWeight: 700 }}>
                    {this.props.textBtn1}
                </button>
                <button>{this.props.textBtn2}</button>
            </div>
        );
    }
}
