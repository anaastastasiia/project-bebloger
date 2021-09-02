import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="last-block">
                    <div className="row row-last">
                        <div className="information">
                            <div className="last-text">
                                <img
                                    src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger3-footer-logo.png"
                                    alt=""
                                ></img>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliquum. Sed ut perspiciatis unde omnis iste
                                    natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo s et quasi
                                </p>
                            </div>
                        </div>
                        <div className="developer">
                            <div className="developer-inform">
                                August 2021 | Anastasiia Proturenko | Course
                                "Front-End Developer"
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
