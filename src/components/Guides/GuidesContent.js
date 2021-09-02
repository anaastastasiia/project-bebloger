import React from 'react'
import './GuidesContent.css'

const GuidesContent = (props) => {
    return (
        <>
            <div className="guid-art-first guid-art-third guid-art-second">
                <img src={props.image} />
                <div className="guid-art-block">
                    <div className="guid-art-content">
                        <a className="title-categ-guides" href="">
                            {props.categories}
                        </a>
                        <h2>{props.description}</h2>
                        <div className="guid-art-author">
                            <img id="authors-ph" src={props.photo} />
                            <a href="">{props.name}</a>
                            <span>{props.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GuidesContent
