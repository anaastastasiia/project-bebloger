import React from 'react'
import './ArticleDescr.css'

const ArticleTitlesItem = (props) => {
    return (
        <>
            <div className="blocks-title">
                <div className="small-title small-title-places small-title-guides">
                    <img src={props.image} />
                    <a href="">{props.name}</a>
                </div>
                <div className="big-title big-title-places big-title-guides">
                    <h3>{props.description}</h3>
                </div>
            </div>
        </>
    )
}

export default ArticleTitlesItem
