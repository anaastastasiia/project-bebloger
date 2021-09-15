import React from 'react'
import './teamAbout.css'

const TeamAbout = (props) => {
    return (
        <>
            <div className="team-content">
                <img src={props.image} alt="" />
                <h4> {props.name}</h4>
                <p id="prof">{props.profession}</p>
                <p>{props.text}</p>
                <span>{props.cocial}</span>
                <div className="social-media-about">
                    <button>
                        <img src={props.facebook} alt="" id="social-img" />
                    </button>
                    <button>
                        <img src={props.twiter} alt="" id="social-img" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default TeamAbout
