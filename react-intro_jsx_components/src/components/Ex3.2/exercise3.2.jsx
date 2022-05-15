import React from "react";
import "./exercise3.2.css";

class Quiz extends React.Component {
    render() {
        return <div className="quiz">{this.props.children}</div>;
    }
}

class QuizTitle extends React.Component {
    render() {
        return (
            <h2 className="quiz-title">
                How Do You Like Front End{this.props.children}
            </h2>
        );
    }
}

class Q1 extends React.Component {
    render() {
        return (
            <div className="question-1-container">{this.props.children}</div>
        );
    }
}

class Q1Title extends React.Component {
    render() {
        return (
            <h4 className="question-1-title">
                How Much you love front end{this.props.children}
            </h4>
        );
    }
}

class Q1Input extends React.Component {
    render() {
        return (
            <input className="question-1-input" type="range" min="0" max="100">
                {this.props.children}
            </input>
        );
    }
}

class Q2 extends React.Component {
    render() {
        return (
            <div className="question-2-container">{this.props.children}</div>
        );
    }
}

class Q2Title extends React.Component {
    render() {
        return (
            <h4 className="question-2-title">
                What is your favorite front end feature/topic
                {this.props.children}
            </h4>
        );
    }
}

class Q2Input extends React.Component {
    render() {
        return (
            <input className="question-2-input" type="text">
                {this.props.children}
            </input>
        );
    }
}

export class Exercise3Part2 extends React.Component {
    render() {
        return (
            <Quiz>
                <QuizTitle></QuizTitle>
                <Q1>
                    <Q1Title></Q1Title>
                    <Q1Input></Q1Input>
                </Q1>
                <Q2>
                    <Q2Title></Q2Title>
                    <Q2Input></Q2Input>
                </Q2>
            </Quiz>
        );
    }
}
