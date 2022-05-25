import React, { Component } from "react";
import InsertToDoField from "../InsertToDoField/InsertToDoField";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./Main.css";
const data = [
    { todo: "Something", id: 1 },
    { todo: "something2", id: 2 },
];

export default class Main extends Component {
    state = {
        allTodo: [],
        itemTitle: "",
    };

    componentDidMount() {
        this.setState(
            { allTodo: data }
            // () =>
            // localStorage.setItem("todoArr", this.state.allTodo)
        );
    }

    insertTodoItem = () => {
        return this.state.allTodo.map((todoItem) => {
            return (
                <ToDoItem
                    key={todoItem.todo}
                    todoTask={todoItem.todo}
                    onDeleteItem={this.onDeleteItem}
                    OnUpdateItem={this.OnUpdateItem}
                    id={todoItem.id}
                ></ToDoItem>
            );
        });
    };

    onInputChange = ({ target }) => {
        this.setState({ itemTitle: target.value });
    };

    onAddItem = () => {
        const newItem = {
            todo: this.state.itemTitle,
            id: Math.random().toString(),
        };
        this.setState((prevState) => ({
            allTodo: [...prevState.allTodo, newItem],
            itemTitle: "",
        }));
    };

    onDeleteItem = (id) => {
        this.setState((prevState) => {
            const newAllItemsArr = prevState.allTodo.filter(
                (item) => item.id !== id
            );
            return { allTodo: newAllItemsArr };
        });
    };

    OnUpdateItem = (id, todo) => {
        this.setState((prevState) => {
            const newArrOfTasks = prevState.allTodo.map((task) => {
                if (task.id === id) {
                    return { todo, id };
                } else {
                    return task;
                }
            });
            return { allTodo: newArrOfTasks };
        });
    };

    render() {
        return (
            <div>
                <InsertToDoField
                    onChangeInput={this.onInputChange}
                    task={this.state.itemTitle}
                    onAddItem={this.onAddItem}
                ></InsertToDoField>
                <div className="items-container">{this.insertTodoItem()}</div>;
            </div>
        );
    }
}

// onInputChange = ({ target }) => {
//     this.setState(
//         (prevState) => ({
//             newItemFieldData: {
//                 ...prevState.newItemFieldData,
//                 id: target.value,
//                 todo: target.value,
//             },
//         }),
//         () => console.log(this.state.newItemFieldData)
//     );
// };

// this.setState((prevState) => ({
//     allTodo: [...prevState.allTodo, prevState.newItemFieldData],
//     newItemFieldData: { todo: "", id: "" },
// }));

// newItemFieldData: { todo: "", id: "" },
