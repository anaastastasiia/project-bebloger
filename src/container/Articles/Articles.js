import React from 'react'
import './Article.css'
import Adventures from '../../components/FirstArticles/Adventures'
import ThreePersonBlock from '../../components/ThreePersonBlock/ThreePersonBlock'
import Places from '../../components/Places/Places'
import Guides from '../../components/Guides/Guides'

const Articles = () => {
    return (
        <>
            <div className="adventures-block places-block guides-block">
                <div className="row row-adventures row-places row-guides">
                    <div className="blocks-title">
                        <div className="small-title">
                            <img
                                src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger3-adventure-icon.png"
                                alt=""
                            />
                            <a href="">Adventures</a>
                        </div>
                        <div className="big-title">
                            <h3>
                                Lorem ipsum dolor sit amet tetur adipis icing
                                elit
                            </h3>
                        </div>
                    </div>
                    <Adventures />
                    <div className="more-btn">
                        <div className="more-text">
                            <a href="">Discover more</a>
                        </div>
                    </div>
                    <ThreePersonBlock />
                </div>
            </div>
            <div className="places-block">
                <Places />
            </div>
            <div className="guides-block">
                <Guides />
            </div>
            <div className="join-us-block">
                <div className="row row-join-us">
                    <div className="join-us">
                        <div className="join-us-content">
                            <img
                                src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger3-location-icon2.png"
                                alt=""
                            ></img>
                            <h3>
                                Lorem ipsum dolor sit amet tetur adipis icing
                                elit
                            </h3>
                            <a href="">Join us today</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Articles
