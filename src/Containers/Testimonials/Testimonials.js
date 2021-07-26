import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import TitleBlock from '../../Components/TitleBlock/TitleBlock'

export default class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
            img: "user1.png", name: "Michal John", job: "CEO of MZP", btn: 0
        }
    }

    users = [
        {
            text: "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
            img: "user1.png", name: "Michal John", job: "CEO of MZP"
        },
        {
            text: "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
            img: "user2.png", name: "John Doe", job: "Publisher"
        },
        {
            text: "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
            img: "user3.png", name: "Denis Kim", job: "Art director"
        },
        {
            text: "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
            img: "user4.png", name: "Bill Stephan", job: "CEO of MZP"
        },
        {
            text: "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
            img: "user5.png", name: "Laura Joy", job: "HR manager"
        },
    ];

    choose = (index) => {
        this.setState((state) => {
            return { text: this.users[index].text, img: this.users[index].img, name: this.users[index].name, job: this.users[index].job, btn: index }
        })
    }

    buttons = [1, 2, 3, 4, 5]

    render() {
        return (
            <section>
                <div className="container conback3 pb-5">
                    <div className="row">
                        <div className="col-12 col-md-4 pe-5">
                            <TitleBlock titleName="Testimonials" des="What People Says" />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-12 col-md-6 text-center">
                            <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "#8643DC", fontSize: "40px" }} />
                            <p className="text-muted my-3">{this.state.text}</p>
                            <img src={"./Images/" + this.state.img} alt="?" className="my-3 user" />
                            <h6>{this.state.name}</h6>
                            <p>{this.state.job}</p>
                            {this.buttons.map((v, i) => {
                                return <button onClick={() => this.choose(i)} className="carButton mx-2" style={{ backgroundColor: this.state.btn == i && "#8643DC" || "white" }} key={i}></button>
                            })}
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
