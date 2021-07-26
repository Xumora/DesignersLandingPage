import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { menu: true }
    }

    openMenu = () => {
        this.setState((state) => {
            return { menu: !this.state.menu }
        })
    }

    render() {
        return (
            <header className="bg-white">
                <div className="container px-3 pt-3">
                    <div className="row">
                        <div className="col-6 col-md-2">
                            <img src="./Images/logo.png" alt="?" />
                        </div>
                        <div className={`col-md-10 d-md-block bg-white ${this.state.menu && "d-none" || ""}`} id="submenu">
                            <div className="d-flex flex-column d-md-block">
                                <a href="#" className="btn text-muted p-0 me-md-3 mt-2">About</a>
                                <a href="#" className="btn text-muted p-0 me-md-3 mt-2">Services</a>
                                <a href="#" className="btn text-muted p-0 me-md-3 mt-2">Works</a>
                                <a href="#" className="btn text-muted p-0 me-md-3 mt-2">Blog</a>
                            </div>
                        </div>
                        <div className="col-6 d-flex d-md-none align-items-center justify-content-end">
                            <button className="btn bg-white shadow menu" style={{ borderRadius: "50%" }} onClick={this.openMenu}>
                                <FontAwesomeIcon icon={faBars} /></button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
