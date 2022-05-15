import "./App.css";
import React from "react";
import { Exercise1 } from "./components/exercise2.1";
import {
    Exercise2Part1,
    Exercise2Part2,
    Exercise2Part3,
} from "./components/exercise2.2";
import { Exercise3 } from "./components/Ex3.1/exercise3.1";
import { Exercise3Part2 } from "./components/Ex3.2/exercise3.2";

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Exercise1 /> */}
                {/* <Exercise2Part1 /> */}
                {/* <Exercise2Part2 /> */}
                {/* <Exercise2Part3 /> */}
                {/* <Exercise3></Exercise3> */}
                <Exercise3Part2></Exercise3Part2>
            </div>
        );
    }
}

export default App;
