import React from 'react'
import './GuidesContent.css'

const GuidesContent = (props) => {
    return (
        <>
            <div className="guid-art-first guid-art-third guid-art-second">
                <div className="guid-art-block">
                    <div className="guid-art-content">
                        <div className="image-zoom">
                            <img src={props.image} alt="" />
                            <a className="title-categ-guides" href="">
                                {props.categories}
                            </a>
                            <h2>{props.description}</h2>
                        </div>
                        <div className="guid-art-author">
                            <img id="authors-ph" src={props.photo} alt="" />
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
