import React from 'react'
import './firstBlock.css'

const FirstBlock = () => {
    return (
        <>
            <section class="first-block">
                <div class="the-biggest-image">
                    <div class="row row-the-biggest-image">
                        <div class="the-biggest-image-content read">
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
                        <div class="read-article-btn">
                            <a href="">READ THE ARTICLE</a>
                        </div>
                    </div>
                </div>
                <div class="social-medies">
                    <div class="insta-block">
                        <div class="insta-img">
                            <img
                                class="social-img"
                                src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger3-insta.png"
                                alt=""
                            />
                        </div>
                        <a href="">Instagram</a>
                    </div>
                    <div class="twitter-block">
                        <div class="twitter-img">
                            <img
                                class="social-img"
                                src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger3-twitter.png"
                                alt=""
                            />
                        </div>
                        <a href="">Twitter</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FirstBlock
