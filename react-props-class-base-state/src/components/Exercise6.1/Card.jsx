/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default class Card extends React.Component {
    render() {
        return (
            <div className="card-container">
                <img src={this.props.image} className="image" />
                <h2 className="title">{this.props.title}</h2>
                <h4 className="description">{this.props.description}</h4>
                <div className="links-container">{this.props.children}</div>
            </div>
        );
    }
}
