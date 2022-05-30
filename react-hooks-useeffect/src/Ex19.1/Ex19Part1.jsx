import axios from "axios";
import React, { useEffect, useState } from "react";

const Ex19Part1 = () => {
    const [fetchedData, setFetchedData] = useState({});

    useEffect(() => {
        const result = async () => {
            const { data } = await axios.get("https://swapi.dev/api/films/1/");
            console.log(data);
            setFetchedData(data);
        };
        result();
    }, []);
    return (
        <div>
            <h2>Movie Title: {fetchedData.title}</h2>
            <h3>Director: {fetchedData.director}</h3>
        </div>
    );
};

export default Ex19Part1;
