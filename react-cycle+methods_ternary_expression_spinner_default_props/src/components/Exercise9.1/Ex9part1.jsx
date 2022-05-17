import React from "react";
import { Spinner1, Spinner2, Spinner3 } from "./Spinner";

export default class Ex9Part1 extends React.Component {
    spinnersArr = [
        <Spinner1></Spinner1>,
        <Spinner2></Spinner2>,
        <Spinner3></Spinner3>,
    ];
    state = { displayText: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState((_) => {
                return { displayText: true };
            });
        }, 3000);
    }

    renderContent() {
        if (this.state.displayText) {
            return <h1 className="text">Hello</h1>;
        } else {
            return this.spinnersArr[Math.floor(Math.random() * 3)];
        }
    }

    render() {
        return <div>{this.renderContent()}</div>;
    }
}
