import React, { Component } from 'react';
import TitleBlock from '../../Components/TitleBlock/TitleBlock';
import { Input } from 'reactstrap';
import Btn from '../../Components/Btn/Btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPaperclip } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
    astyle = {
        color: "#8643DC"
    }
    render() {
        return (
            <section>
                <div className="container py-5 my-5 conback2">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-8 pe-5">
                            <TitleBlock titleName="Contact Me" des="Let me know if you want to talk about a potential collaboration. I'm available for freelance work." />
                        </div>
                        <div className="col-12 col-md-2 pt-5">
                            <a href="#" className="fs-5" style={this.astyle}>infoname@mail.com</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Input type="text" placeholder="What is your name" className="border-0 border-bottom rounded-0 mt-4 py-3" />
                            <Input type="email" placeholder="Your email" className="border-0 border-bottom rounded-0 mt-4 py-3" />
                            <Input type="text" placeholder="Tell me about your project" className="border-0 border-bottom rounded-0 mt-4 py-3" />
                        </div>
                        <div className="col-6">
                            <Btn link="#" name="Get a Quote" />
                        </div>
                        <div className="col-6 text-end">
                            <a href="#" className="btn text-muted my-3 fs-5"><FontAwesomeIcon icon={faPaperclip} /></a>
                            <a href="#" className="btn my-3 fs-5" style={this.astyle}><FontAwesomeIcon icon={faArrowRight} /></a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
