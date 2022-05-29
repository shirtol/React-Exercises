import React, { useState } from "react";

// const Ex18Part3 = () => {
//     const [seconds, setSeconds] = useState(0);
//     const [minutes, setMinutes] = useState(0);
//     const [hours, setHours] = useState(0);

//     const onInputChange = ({ target }) => {

//         if (target.id === "sec") {
//             setSeconds(target.value);
//             setMinutes(target.value / 60);
//             setHours(target.value / 3600);
//         } else if (target.id === "min") {
//             setSeconds(target.value * 60);
//             setMinutes(target.value);
//             setHours(target.value / 60);
//         } else if (target.id === "hr") {
//             setSeconds(target.value * 3600);
//             setMinutes(target.value * 60);
//             setHours(target.value);
//         }
//     };

//     return (
//         <div>
//             <label>Seconds</label>
//             <input
//                 onChange={onInputChange}
//                 type="number"
//                 value={seconds}
//                 id="sec"
//             ></input>

//             <label>Minutes</label>
//             <input
//                 onChange={onInputChange}
//                 type="number"
//                 value={minutes}
//                 id="min"
//             ></input>

//             <label>Hours</label>
//             <input
//                 onChange={onInputChange}
//                 type="number"
//                 value={hours}
//                 id="hr"
//             ></input>
//         </div>
//     );
// };

// export default Ex18Part3;

const Ex18Part3 = () => {
    const [seconds, setSeconds] = useState(0);

    const onInputChange = ({ target: { value, id } }) => {
        if (id === "sec") {
            setSeconds(value * 1);
        } else if (id === "min") {
            setSeconds(value * 60);
        } else if (id === "hr") {
            setSeconds(value * 60 * 60);
        }
    };

    return (
        <div>
            <label>Seconds</label>
            <input
                onChange={onInputChange}
                type="number"
                value={seconds}
                id="sec"
            ></input>

            <label>Minutes</label>
            <input
                onChange={onInputChange}
                type="number"
                value={seconds / 60}
                id="min"
            ></input>

            <label>Hours</label>
            <input
                onChange={onInputChange}
                type="number"
                value={seconds / (60 * 60)}
                id="hr"
            ></input>
        </div>
    );
};

export default Ex18Part3;
