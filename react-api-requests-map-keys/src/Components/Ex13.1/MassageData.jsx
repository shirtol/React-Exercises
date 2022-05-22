import React, { Component } from "react";
import Card from "./Card.jsx";
import { data } from "./data.js";
import Name from "./Name.jsx";
import "./style.css";

export default class MassageData extends Component {
    state = { names: [], peopleWhoBornBefore1990: [] };
    getAllNames = () => data.map((person) => person.name);

    getAllObjBefore1990 = () =>
        data.filter((person) => parseInt(person.birthday.slice(-4)) < 1990);

    componentDidMount = () => {
        this.setState((_) => ({
            names: this.getAllNames(),
            peopleWhoBornBefore1990: this.getAllObjBefore1990(),
        }));
    };

    render() {
        return (
            <div className="main-container">
                <div className="all-names-container">
                    {this.state.names.map((name) => (
                        <Name
                            key={name + Math.random() * 10}
                            name={name}
                        ></Name>
                    ))}
                </div>
                <div className="all-cards-container">
                    {this.state.peopleWhoBornBefore1990.map(
                        ({ name, birthday, favoriteFoods }) => (
                            <Card
                                key={name + Math.random() * 10}
                                name={name}
                                birthday={birthday}
                                favoriteMeat={favoriteFoods.meats.join(" ")}
                                favoriteFish={favoriteFoods.fish.join(" ")}
                            ></Card>
                        )
                    )}
                </div>
            </div>
        );
    }
}
