import React from "react";

export default class Counter extends React.Component {
    state = { counts: 0 };

    increaseCounter = () => {
        this.setState({ counts: this.state.counts + 1 });
    };

    render() {
        return (
            <div>
                <button onClick={this.increaseCounter}>Increment</button>
                <h3>{this.state.counts}</h3>
            </div>
        );
    }
}
