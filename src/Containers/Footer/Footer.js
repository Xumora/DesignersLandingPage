import React, { Component } from 'react'

export default class Footer extends Component {

    sl = [
        { img: "dribble.png", link: "#" },
        { img: "instagram.png", link: "#" },
        { img: "linkedin.png", link: "#" },
    ]
    render() {
        return (
            <section>
                <div className="container text-center pb-5">
                    <p className="fs-3">Let’s be Friends</p>
                    {
                        this.sl.map((v, i) => {
                            return <a href={v.link} className="btn p-0 mx-2" key={i}><img src={`./Images/${v.img}`} alt="?" /></a>
                        })
                    }
                </div>
            </section>
        )
    }
}
