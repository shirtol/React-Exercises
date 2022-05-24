import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../../store";
import "./Products.css";

export default class Products extends Component {
    state = { store: [] };

    componentDidMount() {
        this.setState({ store: store });
    }
    render() {
        return (
            <div className="items-container">
                {this.state.store.map((item) => {
                    return (
                        // <Link to={`/product/${item.id}`} key={item.title}>
                        //     {item.title}
                        // </Link>
                        <Link
                            product={item}
                            to={{
                                pathname: `${this.props.location.pathname}/${item.id}`,
                                item: item,
                            }}
                            key={item.title}
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </div>
        );
    }
}
