import axios from "axios";
import React, { Component } from "react";
import Button from "./Button";
import JokeBox from "./JokeBox";
import SearchBar from "./SearchBar";
import "./style.css";

export default class ChuckNorris extends Component {
    state = {
        randomJoke: "",
        arrOfCategories: [],
        valueEntered: "",
        allJokesInCategory: [],
    };
    fetchData = async (url = "") => {
        try {
            const response = await axios.get(
                `https://api.chucknorris.io/jokes/random${url}`
            );
            this.setState((_) => ({ randomJoke: response.data.value }));
        } catch (err) {
            console.error(err);
        }
    };

    componentDidMount = async () => {
        try {
            const response = await axios.get(
                "https://api.chucknorris.io/jokes/categories"
            );
            this.setState((_) => ({ arrOfCategories: response.data }));
        } catch (err) {
            console.error(err);
        }
    };

    onInputChange = (value) => {
        this.setState((_) => ({ valueEntered: value.toLowerCase() }));
    };

    onInputEntered = async (e) => {
        if (e.key === "Enter") {
            if (!this.state.arrOfCategories.includes(e.target.value)) {
                this.setState((_) => ({ allJokesInCategory: [] }));
            } else {
                try {
                    const response = await axios.get(
                        `https://api.chucknorris.io/jokes/search?query=${e.target.value}`
                    );
                    this.setState((_) => ({
                        allJokesInCategory: response.data.result.map(
                            (joke) => joke.value
                        ),
                    }));
                } catch (err) {
                    console.error(err);
                }
            }
        }
    };

    render() {
        return (
            <div className="chuck-norris-container">
                <SearchBar
                    value={this.state.valueEntered}
                    onKeyPress={this.onInputEntered}
                    onChange={this.onInputChange}
                ></SearchBar>
                <Button
                    btnText="get random joke"
                    onBtnClick={() => this.fetchData()}
                ></Button>
                <br></br>
                <div className="categories-container">
                    {this.state.arrOfCategories.map((category) => (
                        <Button
                            btnText={category}
                            key={category}
                            onBtnClick={() =>
                                this.fetchData(`?category=${category}`)
                            }
                        ></Button>
                    ))}
                </div>

                <JokeBox textContent={this.state.randomJoke}></JokeBox>
                <br />
                <br />
                <div className="all-jokes-container">
                    {this.state.allJokesInCategory.map((joke) => (
                        <JokeBox textContent={joke} key={joke}></JokeBox>
                    ))}
                </div>
            </div>
        );
    }
}
