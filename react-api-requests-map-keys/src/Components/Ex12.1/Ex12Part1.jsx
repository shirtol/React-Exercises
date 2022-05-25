import axios from "axios";
import React, { Component } from "react";

export default class Ex12Part1 extends Component {
    state = { randomJoke: "", arrOfCategories: [], animalJoke: "" };

    onButtonClick = async () => {
        const response = await axios.get(
            "https://api.chucknorris.io/jokes/random"
        );
        this.setState((_) => ({ randomJoke: response.data.value }));
    };

    getArrOfCategories = async () => {
        const response = await axios.get(
            "https://api.chucknorris.io/jokes/categories"
        );
        console.log(response);
        this.setState(
            (_) => ({ arrOfCategories: response.data }),
            () => console.log(this.state.arrOfCategories)
        );
    };

    getAnimalJoke = async () => {
        const response = await axios.get(
            "https://api.chucknorris.io/jokes/random?category=animal"
        );
        this.setState((_) => ({ animalJoke: response.data.value }));
    };

    render() {
        return (
            <div>
                <div className="random-joke-all-categories">
                    <button onClick={this.onButtonClick}>
                        Get Random Joke
                    </button>
                    <h1>{this.state.randomJoke}</h1>
                </div>
                <div className="categories-btn-container">
                    <button onClick={this.getArrOfCategories}>
                        Get All categories
                    </button>
                </div>
                <div className="get-all-btn-container">
                    <div>
                        {this.state.arrOfCategories.map((category) => (
                            <button key={category}>{category}</button>
                        ))}
                    </div>
                </div>
                <div className="animal-category">
                    <button onClick={this.getAnimalJoke}>
                        Get Animal Joke
                    </button>
                    <h1>{this.state.animalJoke}</h1>
                </div>
            </div>
        );
    }
}
