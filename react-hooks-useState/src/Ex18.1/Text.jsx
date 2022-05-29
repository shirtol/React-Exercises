import React, { useState } from "react";

// const Text = ({ text, maxTextLength }) => {
//     const [isTextHidden, setIsTextHidden] = useState(
//         text.length > maxTextLength
//     );

//     const onShowMore = () => setIsTextHidden(false);

//     const onShowLess = () => setIsTextHidden(true);

//     return isTextHidden ? (
//         <div>
//             <p>{`${text.slice(0, maxTextLength)}...`}</p>
//             <span onClick={onShowMore}>Show More</span>
//         </div>
//     ) : (
//         <div>
//             <p>{text} </p>
//             {<span onClick={onShowLess}>Show Less</span>}
//         </div>
//     );
// };

// export default Text;

const Text = ({ text, maxTextLength }) => {
    const [isTextHidden, setIsTextHidden] = useState(
        text.length > maxTextLength
    );

    const handleToggle = () => {
        setIsTextHidden((prevState) => !prevState);
    };

    const displayText = () => {
        return (
            <p>
                {isTextHidden ? `${text.substring(0, maxTextLength)}...` : text}
                <span
                    onClick={handleToggle}
                    style={{ color: "blue", cursor: "pointer" }}
                >
                    {isTextHidden ? "show more" : "show less"}
                </span>
            </p>
        );
    };

    return <div>{displayText()}</div>;
};

export default Text;
