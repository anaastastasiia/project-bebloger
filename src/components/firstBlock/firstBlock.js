import React from 'react'
import './firstBlock.css'
import { Link } from 'react-router-dom'


const FirstBlock = () => {
    return (
        <>
            <section className="first-block">
                <div className="the-biggest-image">
                    <div className="row row-the-biggest-image">
                        <div className="the-biggest-image-content read">
                            <div>
                            <p id="hot-title">
                                Hot air baloon ride at the Pointy Peak
                                Mountains.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Et ullam, repellendus sed
                                officiis maiores necessitatibus natus illum.
                            </p>
                            </div>
                            
                            <div className="read-article-btn">
                                <button>
                                    <Link to="/about" className="link-read" >
                                        READ THE ARTICLE
                                    </Link>
                                </button>
                            </div>
                        </div>
                        {/* <div className="read-article-btn">
                            <button>READ THE ARTICLE</button>
                        </div> */}
                    </div>
                </div>
                <div className="social-medies">
                    <div className="insta-block">
                        <div className="insta-img">
                            <img
                                className="social-img"
                                src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger3-insta.png"
                                alt=""
                            />
                        </div>
                        <button>Instagram</button>
                    </div>
                    <div className="twitter-block">
                        <div className="twitter-img">
                            <img
                                className="social-img"
                                src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger3-twitter.png"
                                alt=""
                            />
                        </div>
                        <button>Twitter</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FirstBlock
