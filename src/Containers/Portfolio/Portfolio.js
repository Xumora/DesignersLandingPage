import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import TitleBlock from '../../Components/TitleBlock/TitleBlock';

export default class Portfolio extends Component {
    istyle = {
        color: "#8643DC"
    }
    render() {
        return (
            <section>
                <div className="container conback pt-5">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-4">
                            <TitleBlock titleName="Portfolio" des="All Creative Projects" />
                        </div>
                        <div className="col-12 col-md-2 pt-5">
                            <a href="#" className="text-dark fs-5">Explore More <FontAwesomeIcon icon={faArrowRight} style={this.istyle} /></a>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-12 col-md-6">
                            <img src="./Images/port1.png" alt="?" className="w-100" />
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="./Images/port2.png" alt="?" className="w-100" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
