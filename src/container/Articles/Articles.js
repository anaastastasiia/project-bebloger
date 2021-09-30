import React from 'react'
import './Article.css'
import Adventures from '../../components/FirstArticles/Adventures'
import ThreePersonBlock from '../../components/ThreePersonBlock/ThreePersonBlock'
import Places from '../../components/Places/Places'
import Guides from '../../components/Guides/Guides'
import { Link } from 'react-router-dom'

const Articles = ({changeLike, likeButtonState}) => {
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
                            <a href="https://themes.muffingroup.com/be/blogger3/">
                                Adventures
                            </a>
                        </div>
                        <div className="big-title">
                            <h3>
                                Lorem ipsum dolor sit amet tetur adipis icing
                                elit
                            </h3>
                        </div>
                    </div>
                    <Adventures changeLike={changeLike} likeButtonState={likeButtonState}/>
                    <div className="more-btn">
                        <div className="more-text">
                            <Link to="/joinus" className="link-read" >
                                Discover more
                            </Link>
                            
                        </div>
                    </div>
                    <ThreePersonBlock />
                </div>
            </div>
            <div className="places-block">
                <Places changeLike={changeLike} likeButtonState={likeButtonState}/>
            </div>
            <div className="guides-block">
                <Guides changeLike={changeLike} likeButtonState={likeButtonState}/>
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
                            <a href="https://themes.muffingroup.com/be/blogger3/">
                                <Link to="/joinus"  >
                                    Join us today
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Articles
