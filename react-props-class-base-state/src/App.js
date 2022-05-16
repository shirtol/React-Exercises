import "./App.css";
import Exercise4Part1 from "./components/Exercise4.1/Exercise4.1";
// import Card from "./components/Exercise4.2/Card";
// import Link from "./components/Exercise4.2/Link";

import Card from "./components/Exercise6.1/Card";
import Link from "./components/Exercise6.1/Link";
import faker from "faker";
import Counter from "./components/Exercise7.1/Counter";
import HideAndSeek from "./components/Exercise7.2/HideAndSeek";
import Exercise7Part3 from "./components/Exercise7.3/Exercise7part3";

function App() {
    const ArrOfCards = () => {
        return [1, 2, 3].map((num) => (
            <Card
                image={faker.image.image()}
                title={`${num} random title`}
                description={`Random description ${num}`}
                key={`${num}`}
            >
                <Link linkName="Share"></Link>
                <Link linkName="Explore"></Link>
            </Card>
        ));
    };
    return (
        <div className="App">
            {/* <Exercise4Part1 textBtn1="Important" textBtn2="Not Important" /> */}
            {/* <div className="cardsContainer">{ArrOfCards()}</div> */}
            {/* <Counter></Counter> */}
            {/* <HideAndSeek></HideAndSeek> */}
            {/* <Exercise7Part3></Exercise7Part3> */}
        </div>
    );
}

export default App;
