import React from "react";

export class Exercise2Part1 extends React.Component {
    data = ["hello", "world"];

    render() {
        return (
            <div>
                <p>{`${this.data[0]} ${this.data[1]}`}</p>
            </div>
        );
    }
}

export class Exercise2Part2 extends React.Component {
    number1 = 5;
    number2 = 6;
    total = this.number1 + this.number2;

    render() {
        return (
            <div>
                <p>{`${this.number1} + ${this.number2} = ${this.total}`}</p>
            </div>
        );
    }
}

export class Exercise2Part3 extends React.Component {
    string = "I love React!";

    render() {
        return (
            <div>
                <p>{`The string's length is ${this.string.length}`}</p>
            </div>
        );
    }
}
