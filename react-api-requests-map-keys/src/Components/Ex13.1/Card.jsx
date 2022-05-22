const Card = ({ name, birthday, favoriteMeat, favoriteFish }) => {
    return (
        <div className="card-container">
            <h2 className="name">{name}</h2>
            <h3 className="birthday">{birthday}</h3>
            <div className="food-container">
                <h2 className="food-title">Favorite Meat:</h2>
                <h3>{favoriteMeat}</h3>
                <h2 className="food-title">Favorite Fish</h2>
                <h3>{favoriteFish}</h3>
            </div>
        </div>
    );
};

export default Card;
