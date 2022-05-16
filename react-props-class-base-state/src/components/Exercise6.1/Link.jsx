/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default class Link extends React.Component {
    render() {
        return (
            <a href="#" className="link">
                {this.props.linkName}
            </a>
        );
    }
}
