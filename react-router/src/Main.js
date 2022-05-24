import React, { Component } from "react";
import { Route } from "react-router-dom";
import Homepage from "./Components/Homepage/HomePage";
import Products from "./Components/Products/Products";
import Header from "./Components/Header/Header";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import NotFound from "./Components/NotFound/NotFound";
import { Switch } from "react-router-dom";

export default class Main extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Switch>
                    <Route path="/" exact component={Homepage}></Route>
                    <Route path="/products" exact component={Products}></Route>
                    <Route
                        exact
                        path="/products/:id"
                        render={(props) => (
                            <ProductDetail {...props}></ProductDetail>
                        )}
                    ></Route>
                    {/* <Route path="/product/:id">
                    <ProductDetail></ProductDetail>
                </Route> */}
                    <Route path="/*" exact component={NotFound}></Route>
                </Switch>
            </>
        );
    }
}
