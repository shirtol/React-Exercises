import React, { Component } from "react";
import Button from "./Button";
import TextArea from "./TextArea";
import "./style.css";

export default class Ex14Part2 extends Component {
    constructor(props) {
        super(props);
        this.textAreaRef = React.createRef();
    }

    copyText = () => {
        //? Deprecated:
        // this.textAreaRef.current.select();
        // document.execCommand("copy");

        //? Not Deprecated:
        this.textAreaRef.current.select();
        navigator.clipboard.writeText(this.textAreaRef.current.value);
    };

    render() {
        return (
            <div className="container">
                <h1>Enter some text you want to copy</h1>
                <TextArea textAreaRef={this.textAreaRef}></TextArea>
                <Button text="Copy" onBtnClick={this.copyText}></Button>
            </div>
        );
    }
}
