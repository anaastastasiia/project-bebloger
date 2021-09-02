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
                            <img src={props.image} />
                            <a className="titlee-categories" href="">
                                {props.categories}
                            </a>
                            <h2>{props.description}</h2>
                            <p>{props.text}</p>
                        </div>

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
