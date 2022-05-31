import React, { useRef } from "react";
// import video from "./Videos.video.mp4";
import video from "../../Videos/video3.mp4";

const Ex21Part2 = () => {
    const videoRef = useRef();

    const handlePlay = () => {
        console.log(videoRef);
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <div>
            <video ref={videoRef} width="750" height="500" controls>
                <source src={video} type="video/mp4"></source>
            </video>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    );
};

export default Ex21Part2;
