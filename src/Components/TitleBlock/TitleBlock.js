import React, { Component } from 'react';
import Title from '../Title/Title';

export default class TitleBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { titleName: props.titleName, des: props.des }
    }

    render() {
        return (
            <>
                <Title titleName={this.state.titleName} />
                <h1 className="fw-bold pe-5">{this.state.des}</h1>
            </>
        )
    }
}
