import React from "react";
import "./ex11part1.css";

class CustomButton extends React.Component {
    onButtonClick = () => this.props.whenClicked(this.props.color);

    render() {
        return (
            <button
                className={`btn ${this.props.color}`}
                onClick={this.onButtonClick}
            >
                {this.props.color}
            </button>
        );
    }
}

export default class Ex11Part1 extends React.Component {
    state = { chosenColor: "" };
    colors = ["blue", "red", "yellow"];

    changeColorDisplay = (colorStr) => {
        this.setState({ chosenColor: colorStr });
    };

    renderButtons = () => {
        return this.colors.map((color) => (
            <CustomButton
                color={color}
                key={color}
                whenClicked={this.changeColorDisplay}
            ></CustomButton>
        ));
    };

    render() {
        return (
            <div className="btn-container">
                {this.renderButtons()}
                <div>{`The color selected is: ${this.state.chosenColor}`}</div>
            </div>
        );
    }
}
