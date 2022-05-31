import React, { useRef } from "react";
import "./Ex21Part3.css";
import imageOneBW from "../../images/bw1.jpg";
import imageTwoBW from "../../images/bw2.jpg";
import imageOneColor from "../../images/color1.jpg";
import imageTwoColor from "../../images/color2.jpg";

const Ex21Part3 = () => {
    const imageOneRef = useRef();
    const imageTwoRef = useRef();

    const onPicOneMouseOver = () => {
        imageOneRef.current.src = imageOneColor;
    };

    const onPicOneMouseOut = () => {
        imageOneRef.current.src = imageOneBW;
    };

    const onPicTwoMouseOver = () => {
        imageTwoRef.current.src = imageTwoColor;
    };

    const onPicTwoMouseOut = () => {
        imageTwoRef.current.src = imageTwoBW;
    };

    return (
        <div>
            <img
                onMouseEnter={onPicOneMouseOver}
                onMouseLeave={onPicOneMouseOut}
                ref={imageOneRef}
                className="image"
                alt="#"
                src={imageOneBW}
            ></img>
            <img
                onMouseEnter={onPicTwoMouseOver}
                onMouseLeave={onPicTwoMouseOut}
                ref={imageTwoRef}
                className="image"
                alt="#"
                src={imageTwoBW}
            ></img>
        </div>
    );
};

export default Ex21Part3;
