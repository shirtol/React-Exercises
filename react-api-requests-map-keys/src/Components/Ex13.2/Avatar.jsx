const Avatar = ({ idx, name, picture }) => {
    return (
        <div>
            <img alt={name.first} src={picture.large}></img>
            <h3>{`${name.first} ${name.last}`}</h3>
        </div>
    );
};

export default Avatar;
