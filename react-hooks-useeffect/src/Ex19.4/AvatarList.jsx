import React from "react";
import Avatar from "./Avatar";

const AvatarList = ({ avatarsList }) => {
    const avatars = avatarsList.map(({ picture, name }, idx) => {
        return (
            <Avatar
                idx={idx}
                name={name}
                picture={picture}
                key={`${idx * Math.random() * 10} ${name.last}`}
            ></Avatar>
        );
    });
    return <>{avatars}</>;
};

export default AvatarList;
