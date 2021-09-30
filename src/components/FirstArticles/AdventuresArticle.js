import React from 'react'
import './AdventStyles.css'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { Link } from 'react-router-dom'

const AdventureArticle = ({id,image,categories,description,text,photo,name,date,isLiked = false,changeLike
}) => {
    return (
        <>
            <div className="adv-art-first adv-art-two">
                <div className="adv-art-block">
                    <div className="adv-art-content">
                        <div className="image-zoom">
                        <button className="like-btn-adv" onClick={() => changeLike(id) } >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        
                    </button>
                            <img src={image} alt="" />
                            <button className="titlee-categories">
                                 <Link to="/adventures" className="link-read" >
                                     {categories}
                                 </Link>
                            </button>
                            <h2>{description}</h2>
                            <p>{text}</p>
                        </div>

                        <div className="articles-author">
                            <img id="authors-ph" src={photo} alt="" />
                            <button>{name}</button>
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdventureArticle
