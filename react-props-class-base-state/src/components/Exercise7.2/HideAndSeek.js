import React from "react";

export default class HideAndSeek extends React.Component {
    state = { isDisplay: true };

    toggleDisplayBox = () => {
        this.setState({ isDisplay: !this.state.isDisplay });
    };

    render() {
        return (
            <div className="container">
                <button className="btn" onClick={this.toggleDisplayBox}>
                    Show/Hide
                </button>
                <div
                    className="box"
                    style={{
                        visibility: `${
                            this.state.isDisplay ? "visible" : "hidden"
                        }`,
                    }}
                ></div>
            </div>
        );
    }
}
