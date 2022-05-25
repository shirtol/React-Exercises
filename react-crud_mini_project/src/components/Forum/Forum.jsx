import React, { Component } from "react";
import Modal from "react-modal/lib/components/Modal";
import { ForumApi } from "../../api";
import Form from "../Form/Form";
import Spinner from "../Spinner/Spinner";
import User from "../User/User";
import "./Forum.css";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        background: "#333",
        color: "#fff",
        borderRadius: "10px",
    },
};

Modal.setAppElement("#root");
export default class Forum extends Component {
    state = {
        users: [],
        newUserFirstName: "",
        newUserLastName: "",
        newUserImage: "",
        newUserPost: "",
        isSpinning: true,
        modalIsOpen: false,
        invalidTextMsg: "",
    };

    async componentDidMount() {
        try {
            const { data } = await ForumApi.get("/users");
            this.setState({ users: data, isSpinning: false });
        } catch (err) {
            console.log(err);
        }
    }

    displayUsers = () => {
        return this.state.users.map(({ first, last, img, description, id }) => {
            return (
                <User
                    first={first}
                    last={last}
                    img={img}
                    description={description}
                    key={id}
                    id={id}
                    onUpdatePost={this.onUpdatePost}
                    onDeletePost={this.onDeletePost}
                ></User>
            );
        });
    };

    onInputChange = ({ target }) => {
        this.setState({ [target.id]: target.value });
    };

    isValidImage = (url) => /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);

    onPostButtonClick = async () => {
        if (this.state.newUserFirstName.length < 5) {
            this.setState((prevState) => ({
                modalIsOpen: !prevState.modalIsOpen,
                invalidTextMsg:
                    "Please make sure your name contains at least 5 characters",
            }));
            return;
        } else if (!this.isValidImage(this.state.newUserImage)) {
            this.setState((prevState) => ({
                modalIsOpen: !prevState.modalIsOpen,
                invalidTextMsg: "Invalid image URL...",
            }));
            return;
        }

        this.setState((prevState) => ({ isSpinning: !prevState.isSpinning }));
        const newPost = {
            first: this.state.newUserFirstName,
            last: this.state.newUserLastName,
            img: this.state.newUserImage,
            description: this.state.newUserPost,
        };
        const { data } = await ForumApi.post("/users", newPost);

        this.setState((prevState) => ({
            users: [...prevState.users, data],
            newUserFirstName: "",
            newUserLastName: "",
            newUserImage: "",
            newUserPost: "",
            isSpinning: false,
        }));
    };

    onUpdatePost = async (id, description) => {
        this.setState((prevState) => ({ isSpinning: !prevState.isSpinning }));
        const userToUpdate = this.state.users.find((user) => user.id === id);
        const { data } = await ForumApi.put(`/users/${id}`, {
            ...userToUpdate,
            description: description,
        });
        const updatedPostsArr = this.state.users.map((user) => {
            if (user.id === id) {
                return data;
            }
            return user;
        });
        this.setState({ users: updatedPostsArr, isSpinning: false });
    };

    onDeletePost = async (id) => {
        this.setState((prevState) => ({ isSpinning: !prevState.isSpinning }));
        const filteredUsersArr = this.state.users.filter(
            (user) => user.id !== id
        );
        await ForumApi.delete(`/users/${id}`);
        this.setState({ users: filteredUsersArr, isSpinning: false });
    };

    handleCloseModal = () => {
        this.setState({ modalIsOpen: false });
    };

    render() {
        return this.state.isSpinning ? (
            <Spinner></Spinner>
        ) : (
            <>
                <div className="my-container">
                    <Form
                        onInputChange={this.onInputChange}
                        firstName={this.state.newUserFirstName}
                        lastName={this.state.newUserLastName}
                        image={this.state.newUserImage}
                        post={this.state.newUserPost}
                        onPostButtonClick={this.onPostButtonClick}
                        className="my-form"
                    ></Form>
                    <div className="ui cards my-cards-container">
                        {this.displayUsers()}
                    </div>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={customStyles}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={this.handleCloseModal}
                >
                    <h2>{this.state.invalidTextMsg}</h2>
                    <button
                        onClick={this.handleCloseModal}
                        className="ui button"
                    >
                        Close
                    </button>
                </Modal>
            </>
        );
    }
}
