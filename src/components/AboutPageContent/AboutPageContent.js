import React from 'react'
import './AboutPageContent.css'
const AboutPageContent = () => {
    return (
        <>
            <div className="title">
                <h1>Lorem ipsum dolor sit amet tetur adipis icing elit</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur lorem <br />
                    adipisicing elit, sed dolor sit amet
                </p>
            </div>
            <div className="article">
                <div className="text-content">
                    <img
                        src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-about-icons.png"
                        alt=""
                    />
                    <h3>Lorem ipsum dolor sit amet tetur adipis icing elit</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labor
                    </p>
                    <button>Discover more</button>
                </div>
                <div className="img-content">
                    <img
                        src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-about-mountains.jpg"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}
export default AboutPageContent
