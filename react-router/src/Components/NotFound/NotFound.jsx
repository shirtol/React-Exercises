import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="error-page-container">
            <h1 className="error-title">404 - Not Found!</h1>
            <Link className="link-go-home" to="/">
                Go Home
            </Link>
        </div>
    );
}
