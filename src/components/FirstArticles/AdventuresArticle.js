import React, {useState} from 'react'
import './AdventStyles.css'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { Link } from 'react-router-dom'

const AdventureArticle = ({id,image,categories,description,text,photo,name,date,isLiked = false,changeLike
}) => {
    const getRandomNumbers = (min, max) => {
        min = Math.ceil(1)
        max = Math.floor(100)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const [likes,setLikes] = useState(getRandomNumbers())
    return (
        <>
            <div className="adv-art-first adv-art-two">
                <div className="adv-art-block">
                    <div className="adv-art-content">
                        <div className="image-zoom">
                        <button className="like-btn-adv" onClick={() => changeLike(id)}  >
                            {isLiked ? <FavoriteIcon onClick={() =>setLikes(likes-1)}/> : <FavoriteBorderIcon onClick={() =>setLikes(likes+1)}/>}
                            {likes}
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
