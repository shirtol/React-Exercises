import React from "react";
import "./ex8part2.css";

const Box = (props) => {
    return (
        <div
            className={`box box${props.boxNumber}`}
            style={{
                transform: `translate3d(${props.transformParam}rem, 0, 0)`,
            }}
        >
            <div></div>
        </div>
    );
};

export default class Ex8Part2 extends React.Component {
    state = { visible: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState((prevState) => {
                console.log(prevState);
                return { visible: true };
            });
        }, 1000);
        setTimeout(() => {
            this.setState((_) => {
                return { visible: false };
            });
        }, 4000);
    }

    render() {
        return (
            <div className="container">
                <Box
                    boxNumber={1}
                    transformParam={this.state.visible ? 0 : -10}
                ></Box>
                <Box
                    boxNumber={2}
                    transformParam={this.state.visible ? 0 : -20}
                ></Box>
                <Box
                    boxNumber={3}
                    transformParam={this.state.visible ? 0 : -5}
                ></Box>
            </div>
        );
    }
}
