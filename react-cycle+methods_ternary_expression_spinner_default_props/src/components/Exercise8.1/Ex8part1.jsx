import React from "react";

export default class Ex8Part1 extends React.Component {
    constructor(props) {
        super(props);
        this.text = React.createRef();
    }
    state = { favoriteColor: "black" };

    //call when the component first render on the screen
    componentDidMount() {
        setTimeout(() => {
            this.setState((_) => {
                return { favoriteColor: "pink" };
            });
        }, 1000);
    }

    //When the component update this function will be call
    componentDidUpdate() {
        //! With ref
        this.text.current.textContent = `The updated favorite color is ${this.state.favoriteColor}`;
        // !Without ref
        // document.getElementById(
        //     "new-color"
        // ).textContent = `The updated favorite color is ${this.state.favoriteColor}`;
    }

    render() {
        return (
            <div>
                <h1>{`My favorite color is ${this.state.favoriteColor}`}</h1>
                <div id="new-color" ref={this.text}></div>
            </div>
        );
    }
}
