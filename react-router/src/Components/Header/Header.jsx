import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header({ location }) {
    return (
        <header className="navbar">
            <li>
                <NavLink to="/">Home</NavLink>
                {/* <NavLink to={location.pathname}>Home</NavLink> */}
            </li>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
        </header>
    );
}
