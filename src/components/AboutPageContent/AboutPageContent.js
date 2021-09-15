import React from 'react'
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
                        <button>Discover more</button>
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
            </div>
        </>
    )
}
export default AboutPageContent
