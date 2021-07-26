import React, { Component } from 'react';
import './Title.css'

export default class Title extends Component {
    constructor(props) {
        super(props);
        this.state = { titleName: props.titleName }
    }

    render() {
        return (
            <p className="title fs-5">{this.state.titleName}</p>
        )
    }
}
