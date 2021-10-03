import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../container/Footer/Footer'
import './AboutPageContent.css'
import './teamAbout'
import TeamAbout from './teamAbout'
import TeamArray from './TeamArray'

const AboutPageContent = () => {
    return (
        <>
            <div className="about-content">
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
                        <h3>
                            Lorem ipsum dolor sit amet tetur adipis icing elit
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labor
                        </p>
                        <button>
                            <Link to="/joinus" className="aboutLink" >
                                Discover more
                            </Link>
                        </button>  
                    </div>
                    <div className="img-content">
                        <img
                            src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-about-mountains.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <div className="row-team">
                        <div className="team-block">
                            <div className="title-team">
                                <h1>Our team</h1>
                            </div>
                            <div className="team-members">
                                {TeamArray.map((team) => (
                                    <TeamAbout
                                        key={team.id}
                                        image={team.image}
                                        name={team.name}
                                        profession={team.profession}
                                        text={team.text}
                                        cocial={team.cocial}
                                        facebook={team.facebook}
                                        twiter={team.twiter}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="big-article-about">
                    <div className="big-article-right">
                        <img
                            src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-about-betheme-logo.png"
                            alt=""
                        />
                        <h3>
                            Lorem ipsum dolor sit amet tetur adipis icing elit
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <br />
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut
                            fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam
                            eius modi tempora incidunt ut labore et dolore
                            magnam aliquam quaerat voluptatem.
                        </p>
                    </div>
                    <div className="big-article-left">
                        <img
                            id="big-img-big-art"
                            src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-about-lady.jpg"
                            alt=""
                        />
                        <img
                            id="small-img-big-art"
                            src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-about-quotes.png"
                            alt=""
                        />
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqu enim ad minim veniam.
                        </h2>
                        <div className="quotes-author-with-img-about">
                            <img
                                src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-home-mini-.png"
                                alt=""
                            />
                            <div className="quotes-author">
                                <button id="quotes-name">Jenny Penny</button>
                                <button>CEO @ Pandolum</button>
                            </div>
                        </div>
                    </div>
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
                                    Lorem ipsum dolor sit amet tetur adipis
                                    icing elit
                                </h3>
                                <Link to="/joinus"  >
                                    Join us today
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default AboutPageContent
