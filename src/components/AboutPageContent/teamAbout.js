import React from 'react'
import './teamAbout.css'

const TeamAbout = (props) => {
    return (
        <>
            <div className="team-content">
                <img src={props.image} alt="" />
                <h4> {props.name}</h4>
                <p>{props.profession}</p>
                <p>{props.text}</p>
                <span>{props.cocial}</span>
            </div>
        </>
    )
}

export default TeamAbout
