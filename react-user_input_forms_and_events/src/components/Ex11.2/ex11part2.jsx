import React from "react";

// class CheckBox extends React.Component {
//     render() {
//         return (
//             <div>
//                 <input
//                     type="checkbox"
//                     defaultChecked={this.props.isChecked}
//                 ></input>
//                 <label>{this.props.text}</label>
//             </div>
//         );
//     }
// }

// export default class Ex11Part2 extends React.Component {
//     render() {
//         return (
//             <form>
//                 <CheckBox
//                     text="I read the term of the app"
//                     isChecked={false}
//                 ></CheckBox>
//                 <CheckBox
//                     text="I accept the term of the app"
//                     isChecked={false}
//                 ></CheckBox>
//                 <CheckBox
//                     text="I want to get the weekly news letter"
//                     isChecked={true}
//                 ></CheckBox>
//                 <CheckBox
//                     text="I want to get sales and offers"
//                     isChecked={true}
//                 ></CheckBox>
//             </form>
//         );
//     }
// }

class CheckBox extends React.Component {
    render() {
        return (
            <div>
                <input
                    onChange={({ target }) => {
                        this.props.handleChange(target.id);
                    }}
                    id={this.props.id}
                    type="checkbox"
                    checked={this.props.checkedC}
                ></input>
                <label>{this.props.text}</label>
            </div>
        );
    }
}

export default class Check extends React.Component {
    state = { c1: false, c2: false, c3: true, c4: true };

    handleChange = (id) => {
        this.setState((prevState) => {
            return { [id]: !prevState[id] };
        });
    };

    render() {
        return (
            <div>
                <CheckBox
                    id="c1"
                    text="I read the term of the app"
                    checkedC={this.state.c1}
                    handleChange={this.handleChange}
                ></CheckBox>
                <CheckBox
                    id="c2"
                    text="I accept the term of the app"
                    checkedC={this.state.c2}
                    handleChange={this.handleChange}
                ></CheckBox>
                <CheckBox
                    id="c3"
                    text="I want to get the weekly news letter"
                    checkedC={this.state.c3}
                    handleChange={this.handleChange}
                ></CheckBox>
                <CheckBox
                    id="c4"
                    text="I want to get sales and offers"
                    checkedC={this.state.c4}
                    handleChange={this.handleChange}
                ></CheckBox>
            </div>
        );
    }
}
