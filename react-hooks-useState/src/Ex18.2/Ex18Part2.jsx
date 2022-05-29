import React, { useState } from "react";
import "./Ex18Part2.css";

const tasksData = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
];

const Ex18Part2 = () => {
    const [tasks, setTasks] = useState(tasksData);

    const handleTask = (index) => {
        const newTasksArr = tasks.map((task, idx) => {
            if (idx === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasksArr);
    };

    const displayTasks = () => {
        return tasks.map((task, idx) => {
            return (
                <div key={task.name + idx}>
                    <span
                        className={
                            task.completed ? "completed" : "not-completed"
                        }
                    >
                        {task.name}
                    </span>
                    <span onClick={() => handleTask(idx)}>
                        {task.completed ? <>&#10003;</> : <>&#10060;</>}
                    </span>
                </div>
            );
        });
    };

    // const onIconClick = (index) => {
    //     setTasks(index);
    // };

    // const displayTasks = () =>
    //     tasks.map((task, index) => {
    //         return <Task key={task.name + index} task={task.name}></Task>;
    //     });

    return <div>{displayTasks()}</div>;
};

export default Ex18Part2;
