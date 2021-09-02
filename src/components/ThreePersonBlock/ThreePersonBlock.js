import React from 'react'
import './ThreePersonBlock.css'

const ThreePersonBlock = () => {
    return (
        <>
            <div className="three-person-ph-block">
                <div className="quotes">
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqu enim ad minim veniam.
                    </h2>
                    <div className="quotes-author-with-img">
                        <img
                            src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-home-mini-.png"
                            alt=""
                        />
                        <div className="quotes-author">
                            <a id="quotes-name" href="">
                                Jenny Penny
                            </a>
                            <a href="">CEO @ Pandolum</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ThreePersonBlock
