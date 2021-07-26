import React, { Component } from 'react';
import Btn from '../../Components/Btn/Btn';

export default class About extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center text-center text-md-start">
                            <div>
                                <p className="fs-4 m-0">Hello,</p>
                                <h1 className="fw-bold display-3">Adam Zakob</h1>
                                <p className="fs-4">a freelance UX Designer</p>
                                <Btn link="#" name="Let’s Talk" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="img-box">
                                <img src="./Images/fon.png" alt="?" className="w-100" />
                                <img src="./Images/user-image.png" alt="?" className="w-50 ui" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
