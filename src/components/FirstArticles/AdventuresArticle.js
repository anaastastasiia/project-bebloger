import React from 'react'
import './AdventStyles.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
const AdventureArticle = (props) => {
    return (
        <>
            <div className="adv-art-first adv-art-two">
                <div className="adv-art-block">
                    <div className="adv-art-content">
                        <div className="image-zoom">
                            <FavoriteBorderIcon className="like-btn" />
                            <img src={props.image} alt="" />
                            <button className="titlee-categories">
                                {props.categories}
                            </button>
                            <h2>{props.description}</h2>
                            <p>{props.text}</p>
                        </div>

                        <div className="articles-author">
                            <img id="authors-ph" src={props.photo} alt="" />
                            <button>{props.name}</button>
                            <span>{props.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdventureArticle
