import React from 'react'
import './AdventStyles.css'
const AdventureArticle = (props) => {
    return (
        <>
            <div className="adv-art-first adv-art-two">
                <img src={props.image} />
                <div className="adv-art-block">
                    <div className="adv-art-content">
                        <a href="">{props.categories}</a>
                        <h2>{props.description}</h2>
                        <p>{props.text}</p>

                        <div className="articles-author">
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
export default AdventureArticle
