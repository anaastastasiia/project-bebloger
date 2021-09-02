import React from 'react'
import './Article.css'
import Adventures from '../../components/FirstArticles/Adventures'
import ThreePersonBlock from '../../components/ThreePersonBlock/ThreePersonBlock'
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
                    <div class="more-btn">
                        <div class="more-text">
                            <a href="">Discover more</a>
                        </div>
                    </div>
                    <ThreePersonBlock />
                </div>
            </div>
        </>
    )
}
export default Articles
