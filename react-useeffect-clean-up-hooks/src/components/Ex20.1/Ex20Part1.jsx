import React, { useState } from "react";
import FetchData from "./FetchData";

const Ex20Part1 = () => {
    const [showData, setShowData] = useState(true);

    return (
        <div>
            <button onClick={() => setShowData((prev) => !prev)}>
                Show / Hide
            </button>
            {showData && <FetchData></FetchData>}
        </div>
    );
};

export default Ex20Part1;
