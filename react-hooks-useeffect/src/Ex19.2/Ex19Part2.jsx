import axios from "axios";
import React, { useEffect, useState } from "react";
import { Input } from "./Input";

const Ex19Part2 = () => {
    const [fetchedData, setFetchedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const result = async () => {
            const { data } = await axios.get(
                "https://restcountries.com/v3.1/all"
            );
            const filteredData = data.map((country) => {
                return country.name.common;
            });
            setFetchedData(filteredData);
            setFilteredData(filteredData);
        };
        result();
    }, []);

    const displayCountries = () => {
        return filteredData.map((country) => {
            return <li key={country}>{country}</li>;
        });
    };

    const filterCountriesArr = (userInput) => {
        const filteredArray = fetchedData.filter((country) =>
            country.toLowerCase().includes(userInput.toLowerCase())
        );
        setFilteredData(filteredArray);
    };

    return (
        <div>
            <Input filterCountries={filterCountriesArr}></Input>
            <ul>{displayCountries()}</ul>;
        </div>
    );
};

export default Ex19Part2;
