import React from "react";

export default class Exercise7Part3 extends React.Component {
    state = { counts: 0 };

    increaseCounter = () => {
        if (this.state.counts < 10) {
            this.setState({ counts: this.state.counts + 1 });
        }
    };

    decreaseCounter = () => {
        if (this.state.counts > -10) {
            this.setState({ counts: this.state.counts - 1 });
        }
    };

    changeTextColor = () => {
        if (this.state.counts > 0) {
            return "green";
        } else if (this.state.counts < 0) {
            return "red";
        } else {
            return "black";
        }
    };

    render() {
        return (
            <div className="container">
                <button className="btn" onClick={this.decreaseCounter}>
                    Decrement
                </button>
                <h3
                    className="text"
                    style={{
                        color: `${this.changeTextColor()}`,
                    }}
                >
                    {this.state.counts}
                </h3>
                <button className="btn" onClick={this.increaseCounter}>
                    Increment
                </button>
            </div>
        );
    }
}
