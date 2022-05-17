import React from "react";
import "./ex8part3.css";

export default class Ex8Part3 extends React.Component {
    colors = ["red", "blue", "purple", "green", "pink"];
    state = { colorChangeCounts: 0 };

    componentDidMount() {
        this.setState({});
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.setState((prevState) => {
                console.log(prevState.colorChangeCounts);
                return {
                    colorChangeCounts: prevState.colorChangeCounts + 1,
                };
            });
        }, 500);
    }

    squareToCircle = () => {
        if (this.state.colorChangeCounts > 5) {
            this.setState((prevState) => {
                return { radius: "50%" };
            });
        }
    };

    render() {
        return (
            <div
                className="colorfulBox"
                style={{
                    background: `${
                        this.colors[this.state.colorChangeCounts % 5]
                    }`,
                    borderRadius:
                        this.state.colorChangeCounts >= 5 ? "50%" : "0",
                }}
            ></div>
        );
    }
}
