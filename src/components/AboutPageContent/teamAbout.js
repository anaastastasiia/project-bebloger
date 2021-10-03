import React from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to="/joinus"  >
                            <img src={props.facebook} alt="" id="social-img" />
                        </Link>
                    </button>
                    <button>
                        <Link to="/joinus"  >
                            <img src={props.twiter} alt="" id="social-img" />
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default TeamAbout
