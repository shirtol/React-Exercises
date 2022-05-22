import axios from "axios";
import React, { Component } from "react";
import AvatarList from "./AvatarList";
import Button from "./Button";
import SearchBar from "./SearchBar";
import "./style.css";

export default class RandomAvatars extends Component {
    state = { avatars: [], nameEntered: "", filteredAvatar: [] };

    componentDidMount = async () => {
        try {
            const response = await axios.get(
                "https://randomuser.me/api/?results=20"
            );
            this.setState((_) => ({ avatars: response.data.results }));
        } catch (err) {
            console.error(err);
        }
    };

    filterAvatarsList = (name) => {
        const filteredListOfAvatars = this.state.avatars.filter((avatar) => {
            const fullName =
                `${avatar.name.first} ${avatar.name.last}`.toLowerCase();
            return fullName.includes(name.toLowerCase());
        });
        this.setState((_) => ({
            filteredAvatar: filteredListOfAvatars,
            nameEntered: name.toLowerCase(),
        }));
    };

    render() {
        return (
            <div className="avatar-search-container">
                <div className="search-bar-container">
                    <SearchBar
                        onInputChange={this.filterAvatarsList}
                        value={this.state.nameEntered}
                    ></SearchBar>
                    <Button></Button>
                </div>
                <div className="avatars-container">
                    <AvatarList
                        avatarsList={
                            this.state.nameEntered.length > 0
                                ? this.state.filteredAvatar
                                : this.state.avatars
                        }
                    ></AvatarList>
                </div>
            </div>
        );
    }
}
