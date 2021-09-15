import React from 'react'
import './JoinUsContent.css'
import PhoneIcon from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import Footer from '../../container/Footer/Footer'

const JoinUsContent = () => {
    return (
        <>
            <div className="join-us-page">
                <div className="join-title">
                    <div className="join-title-content">
                        <h1>
                            Like adventures and writing? Contact and join us
                            today
                        </h1>
                        <h2>+45 566 509 004</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labor.
                        </p>
                    </div>
                </div>
                <div className="feedback-questionnaire">
                    <div className="feedback-questionnaire-content">
                        <div className="text-join">
                            <h3>Lorem ipsum dolor sit amet tetur</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labor
                            </p>
                        </div>
                        <div className="questionnaire-background">
                            <div className="questionnaire">
                                <input type="text" placeholder="Name" />
                                <div className="email-subject">
                                    <input type="email" placeholder="Email" />
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <input type="text" placeholder="Details" />
                                <textarea
                                    type="text"
                                    id="message"
                                    placeholder="Your message"
                                />
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-block">
                    <div className="info-block-content">
                        <div className="info-left">
                            <h1>Useful info</h1>
                            <div className="info-content">
                                <div className="info-left-img">
                                    <img
                                        src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-contact-icon.png"
                                        alt=""
                                    />
                                    <img
                                        src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-contact-icon.png"
                                        alt=""
                                    />
                                    <img
                                        src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-contact-icon.png"
                                        alt=""
                                    />
                                </div>

                                <div className="info-left-text">
                                    <strong>
                                        Poster pentolum quantum pored dolor sit
                                        aisicing elit
                                    </strong>
                                    <strong>
                                        Lorem ipsum dolor sit amet tetur
                                        adipisicing
                                    </strong>
                                    <strong>
                                        Estrop pner valanti osteromus elit via
                                        modore erondero patern
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className="info-right">
                            <h1>Contact us</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labor
                            </p>
                            <div className="info-right-phone">
                                <PhoneIcon />
                                <strong>+01 203 4040 3333</strong>
                            </div>
                            <div className="info-right-email">
                                <MailOutlineIcon />
                                <strong>noreply@envato.com</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default JoinUsContent
