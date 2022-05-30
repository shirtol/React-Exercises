import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Ex19Part3.css";
import Input from "./Input";
import Spinner from "./Spinner";

const Ex19Part3 = () => {
    const [filteredDataArr, setFilteredDataArr] = useState([]);
    const [errMessage, setErrMessage] = useState();
    const [isSpinning, setIsSpinning] = useState(true);

    const fetchData = (userInput) => {
        const result = async () => {
            try {
                const {
                    data: { hits },
                } = await axios.get(
                    `https://hn.algolia.com/api/v1/search?query=${userInput}`
                );
                const filteredFetchedData = hits.map((item) => {
                    return { title: item.title, url: item.url };
                });
                setFilteredDataArr(filteredFetchedData);
            } catch (err) {
                console.error(err.message);
                setErrMessage(err.message);
            }
            setIsSpinning(false);
        };
        result();
    };

    useEffect(() => {
        fetchData("hooks");
    }, []);

    const displayData = () => {
        return filteredDataArr.map((item) => {
            return (
                <a key={item.url} href={item.url}>
                    {item.title}
                </a>
            );
        });
    };

    const onSearchClick = (userInput) => {
        fetchData(userInput);
    };
    return (
        <div>
            <Input onSearchClick={onSearchClick}></Input>
            {isSpinning && <Spinner></Spinner>}
            <div className="links-container">{displayData()}</div>
            {errMessage && <h2>{errMessage}</h2>}
        </div>
    );
};

export default Ex19Part3;
