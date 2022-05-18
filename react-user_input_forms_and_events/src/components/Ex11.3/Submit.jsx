import React from "react";

export default class Submit extends React.Component {
    // state = { isSubmitPress: false };
    // handleSubmit = () => {
    //     this.setState((prevState) => {
    //         return { isSubmitPress: !prevState.isSubmitPress };
    //     });
    // };
    render() {
        // return this.state.isSubmitPress ? (
        //     <ButtonAfterPressSubmit></ButtonAfterPressSubmit>
        // ) : (
        return (
            <input
                className="ui button"
                type="submit"
                value="continue"
                // onClick={this.handleSubmit}
                onSubmit={this.props.submitHandler}
            ></input>
        );
    }
}
