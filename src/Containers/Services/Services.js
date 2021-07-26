import React, { Component } from 'react';
import TitleBlock from '../../Components/TitleBlock/TitleBlock';

export default class Services extends Component {

    cards = [
        {
            img: "card1.png",
            name: "UX Research",
            body: `New demos are continually added and buying a single license for Mak gives you access to all of
            what's shown below, plus everything that will be added in the future.`,
        },
        {
            img: "card2.png",
            name: "Brand Design",
            body: `New demos are continually added and buying a single license for Mak gives you access to all of
            what's shown below, plus everything that will be added in the future.`,
        },
        {
            img: "card3.png",
            name: "Web Development",
            body: `New demos are continually added and buying a single license for Mak gives you access to all of
            what's shown below, plus everything that will be added in the future.`,
        },
    ]

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 pe-5">
                            <TitleBlock titleName="Services" des="What actually I love to do" />
                        </div>
                    </div>
                    <div className="row my-5">
                        {
                            this.cards.map((value, index) => {
                                return <div className="col-12 col-md-4 mt-4" key={index}>
                                    <div className="box">
                                        <div className="d-flex align-items-center mb-3">
                                            <img src={`./Images/${value.img}`} alt="?" className="me-4" />
                                            <h5>{value.name}</h5>
                                        </div>
                                        <small className="text-muted">{value.body}</small>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
