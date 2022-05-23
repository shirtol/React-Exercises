import React, { Component } from "react";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { focus: false };
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        return <input ref={this.inputRef}></input>;
    }
}
