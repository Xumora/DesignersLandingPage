import React, { Component } from 'react';

export default class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = { link: props.link, name: props.name }
    }

    styleBtn = {
        backgroundColor: "#8643DC",
        color: "white",
        padding: "8px 48px",
        borderRadius: "30px",
        fontSize: "18px",
    }

    render() {
        return (
            <a href={this.state.link} className="btn my-3" style={this.styleBtn}>{this.state.name}</a>
        )
    }
}
