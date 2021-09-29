import React from 'react'
import './GuidesPageContent.css'

const GuidesPageArticle = (props) => {
    return (
        <>
            <div className="guid-art-content-page">
                <div className="block-with-img-zoom">
                    <img src={props.image} alt="" />
                    <div className="categ-like">
                        <button className="title-categ">
                            {props.categories}
                        </button>
                    </div>
                    <h2>{props.description}</h2>
                    <p>{props.text}</p>
                </div>

                <div className="articles-author-page">
                    <img id="authors-ph-page" src={props.photo} alt="" />
                    <button>{props.name}</button>
                    <span>{props.date}</span>
                </div>
            </div>
        </>
    )
}

export default GuidesPageArticle
