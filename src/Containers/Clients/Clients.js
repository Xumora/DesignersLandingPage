import React, { Component } from 'react';
import TitleBlock from '../../Components/TitleBlock/TitleBlock';

export default class Clients extends Component {

    clients = [
        { img: "slack.png", name: "Slack", borderColor: "#FFE7F0", bg: "#FFF7FA" },
        { img: "medium.png", name: "Medium", borderColor: "#CAFFE1", bg: "#EDFFF5" },
        { img: "microsoft.png", name: "Microsoft", borderColor: "#DDF5FF", bg: "#F5FCFF" },
        { img: "zeplin.png", name: "Zeplin", borderColor: "#FFEEC9", bg: "#FFFBF2" },
        { img: "shopify.png", name: "Shopify", borderColor: "#DBFFC4", bg: "#F4FFED" }
    ];

    render() {
        return (
            <section>
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className="col-12 col-md-3 pe-5">
                            <TitleBlock titleName="Clients" des="Big Deal With" />
                        </div>
                    </div>
                    <div className="row py-5 justify-content-center">
                        {
                            this.clients.map((value, index) => {
                                return <div className="col-12 col-md-2 mt-3 cb" key={index}>
                                    <div className="boxcard py-4 text-center" style={{ borderColor: value.borderColor, background: value.bg }}>
                                        <img src={"./Images/" + value.img} alt="?" />
                                        <h6 className="mb-0 mt-3">{value.name}</h6>
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
