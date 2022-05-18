import React from "react";
import Button from "./Button";

export default class PageAfterPressSubmit extends React.Component {
    state = { isSubmitted: false };

    handleSendClick = () => this.setState((_) => ({ isSubmitted: true }));

    render() {
        return (
            <div className="page-container">
                <h3>{this.props.firstName}</h3>
                <h3>{this.props.lastName}</h3>
                <h3>{this.props.age}</h3>
                <h3>{this.props.freeText}</h3>

                <div className="btn-container">
                    <Button
                        btnName="back"
                        WhenButtonClick={this.props.clickedBack}
                    ></Button>
                    <Button
                        btnName="send survey"
                        WhenButtonClick={this.handleSendClick}
                    ></Button>
                    {this.state.isSubmitted && <h2>Success!</h2>}
                </div>
            </div>
        );
    }
}
