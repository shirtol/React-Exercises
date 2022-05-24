import React, { Component } from "react";
import NotFound from "../NotFound/NotFound";
// import { Link } from "react-router-dom";
import "./ProductDetail.css";

export default class ProductDetail extends Component {
    // product = store.find(
    //     (product) => product.id === parseInt(this.props.match.params.id)
    // );

    product = this.props.location.item;

    componentDidMount() {
        console.log(this.product);
    }

    render() {
        return this.product ? (
            <div className="product-details-container">
                <h2 className="product-title">{this.product.title}</h2>
                <img
                    className="product-img"
                    src={this.product.imageUrl}
                    alt={this.product.title}
                />
                <h3 className="product-size">{`Size: ${this.product.size}`}</h3>
                <h3 className="product-price">{`Price: ${this.product.price}`}</h3>
                <div>
                    <div
                        className="back-btn"
                        onClick={() => this.props.history.goBack()}
                    >
                        Back
                    </div>
                    {/* <div className="back-btn">
                        <Link to={`/products`}>Back</Link>
                    </div> */}
                </div>
            </div>
        ) : (
            <NotFound></NotFound>
        );
    }
}
