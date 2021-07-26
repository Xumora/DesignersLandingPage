import React, { Component } from 'react';
import TitleBlock from '../../Components/TitleBlock/TitleBlock';

export default class Blog extends Component {

    news = [
        { img: "news2.png", date: "20 June/2020", title: "New devices and applications come to the market." },
        { img: "news3.png", date: "20 June/2020", title: "Every day providing solutions to problems." }
    ]

    render() {
        return (
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <TitleBlock titleName="Blog" des="Get News Feeds" />
                        </div>
                        <div className="col-12 col-md-3 mt-3 mt-md-0">
                            <div>
                                <img src="./Images/news1.png" alt="?" className="w-100" />
                                <p className="my-3" style={{ color: "#8643DC" }}>20 June/2020</p>
                                <h6 className="fw-bold">Technology is evolving rapidly. New devices and applications.</h6>
                            </div>
                        </div>
                        {
                            this.news.map((value, index) => {
                                return <div className="col-12 col-md-3 mt-3 mt-md-0" key={index}>
                                    <div className="news">
                                        <img src={"./Images/" + value.img} alt="?" className="w-100" />
                                        <div className="info">
                                            <p className="my-3 text-white">{value.date}</p>
                                            <h6 className="fw-bold text-white">{value.title}</h6>
                                        </div>
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
