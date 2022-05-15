import React from "react";
import "./exercise3.1.css";

class Box1 extends React.Component {
    render() {
        return <div className="box1">{this.props.children}</div>;
    }
}

class Box2 extends React.Component {
    render() {
        return <div className="box2">{this.props.children}</div>;
    }
}

class Box3 extends React.Component {
    render() {
        return <div className="box3">{this.props.children}</div>;
    }
}
class Box4 extends React.Component {
    render() {
        return <div className="box4">{this.props.children}</div>;
    }
}

export class Exercise3 extends React.Component {
    render() {
        return (
            <div className="container">
                <Box1>
                    <Box2>
                        <Box3>
                            <Box4 />
                            <Box4 />
                        </Box3>
                    </Box2>
                </Box1>
            </div>
        );
    }
}
