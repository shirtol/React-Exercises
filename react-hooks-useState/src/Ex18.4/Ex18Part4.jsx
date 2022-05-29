import React, { useState } from "react";
import Checkbox from "./Checkbox";
import "./Ex18Part4.css";

const Ex18Part4 = () => {
    const inputArr = ["one", "two", "three", "four", "five"];

    const [allInputs, setAllInputs] = useState(inputArr);

    const [itemsToDelete, setItemsToDelete] = useState([]);

    const displayCheckBoxes = () => {
        return allInputs.map((value) => {
            return (
                <Checkbox
                    key={value}
                    value={value}
                    onClick={toggleChecked}
                    checked={itemsToDelete.includes(value)}
                ></Checkbox>
            );
        });
    };

    const toggleChecked = (itemName) => {
        if (itemsToDelete.includes(itemName)) {
            removeItemFromDeleteList(itemName);
        } else {
            setItemsToDelete((prevState) => [...prevState, itemName]);
        }
    };

    const removeItemFromDeleteList = (itemName) => {
        const newArr = itemsToDelete.filter((item) => item !== itemName);
        setItemsToDelete(newArr);
    };

    const onDeleteItems = () => {
        setAllInputs(
            allInputs.filter((inputVal) => {
                return !itemsToDelete.includes(inputVal);
            })
        );
    };

    const onResetList = () => {
        setItemsToDelete([]);
        setAllInputs(inputArr);
    };

    return (
        <div>
            <button onClick={onDeleteItems}>Delete</button>
            <button onClick={onResetList}>Reset</button>
            <ul className="checkbox-list">{displayCheckBoxes()}</ul>
        </div>
    );
};

export default Ex18Part4;
