import React from "react";
import "./ex11part3.css";
import InputTag from "./InputTag";
import SelectTag from "./SelectTag";
import TextAreaTag from "./TextAreaTag";
import Submit from "./Submit";
import PageAfterPressSubmit from "./PageAfterPressSubmit";

/**
 * ?Components:
 * * Input text tags - 2
 * * Select tag - 1
 * * Text area tag - 1
 */

export default class Ex11Part3 extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        age: "",
        freeText: "",
        isSubmitPressed: false,
    };

    handleChangeInput1 = (e) => {
        this.setState({ firstName: e.target.value });
    };

    handleChangeInput2 = (e) => {
        this.setState({ lastName: e.target.value });
    };

    handleChangeSelected = (e) => {
        this.setState({ age: e.target.value });
    };

    handleTextAreaChange = (e) => {
        this.setState({ freeText: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState((_) => {
            return { isSubmitPressed: true };
        });
    };

    handleBack = () => {
        console.log(this.state);
        this.setState((_) => {
            return { isSubmitPressed: false };
        });
    };

    render() {
        return this.state.isSubmitPressed ? (
            <PageAfterPressSubmit
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                age={this.state.age}
                freeText={this.state.freeText}
                clickedBack={this.handleBack}
            ></PageAfterPressSubmit>
        ) : (
            <form className="form" onSubmit={this.handleSubmit}>
                <InputTag
                    inputLabel="first name"
                    whenInputChange={this.handleChangeInput1}
                    inputValue={this.state.firstName}
                ></InputTag>
                <InputTag
                    inputLabel="last name"
                    whenInputChange={this.handleChangeInput2}
                    inputValue={this.state.lastName}
                ></InputTag>
                <SelectTag
                    selectTagValue={this.state.age}
                    whenSelectTagChange={this.handleChangeSelected}
                ></SelectTag>
                <TextAreaTag
                    labelText="free text"
                    textAreaValue={this.state.freeText}
                    whenTextAreaChange={this.handleTextAreaChange}
                ></TextAreaTag>
                <Submit></Submit>
            </form>
        );
    }
}
