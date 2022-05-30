import axios from "axios";
import React, { useEffect, useState } from "react";
import AvatarList from "./AvatarList";
import Button from "./Button";
import SearchBar from "./SearchBar";
import "./Avatar.css";

const RandomAvatars = () => {
    const [avatars, setAvatars] = useState([]);
    const [nameEntered, setNameEntered] = useState("");
    const [filteredAvatar, setFilteredAvatar] = useState([]);

    useEffect(() => {
        const result = async () => {
            try {
                const response = await axios.get(
                    "https://randomuser.me/api/?results=20"
                );
                setAvatars(response.data.results);
            } catch (err) {
                console.error(err);
            }
        };
        result();
    }, []);

    const filterAvatarsList = (name) => {
        const filteredListOfAvatars = avatars.filter((avatar) => {
            const fullName =
                `${avatar.name.first} ${avatar.name.last}`.toLowerCase();
            return fullName.includes(name.toLowerCase());
        });
        setFilteredAvatar(filteredListOfAvatars);
        setNameEntered(name.toLowerCase());
    };

    return (
        <div className="avatar-search-container">
            <div className="search-bar-container">
                <SearchBar
                    onInputChange={filterAvatarsList}
                    userInput={nameEntered}
                ></SearchBar>
                <Button></Button>
            </div>
            <div className="avatars-container">
                <AvatarList
                    avatarsList={
                        nameEntered.length > 0 ? filteredAvatar : avatars
                    }
                ></AvatarList>
            </div>
        </div>
    );
};

export default RandomAvatars;
