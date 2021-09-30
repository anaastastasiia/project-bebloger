import React from 'react'
import './PlacesContent.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { Link } from 'react-router-dom'

const PostsContent = ({id,image,categories,description,photo,name,date,isLiked = false,changeLike
}) => {
    return (
        <>
            <div className="pl-art-first pl-art-second">
                <div className="pl-art-block">
                    <div className="pl-art-content">
                        <div className="image-zoom">
                        <button className="like-btn" onClick={() => changeLike(id) } >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        
                    </button>
                            <img src={image} alt="" />

                            <button className="title-categ-pleces">
                                <Link to="/places"  >
                                     {categories}
                                </Link>
                                
                            </button>
                            <h2>{description}</h2>
                        </div>
                        <div className="pl-art-author">
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
export default PostsContent
