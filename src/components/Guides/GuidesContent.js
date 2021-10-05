import React, {useState} from 'react'
import './GuidesContent.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { Link } from 'react-router-dom'

const GuidesContent = ({id,image,categories,description,photo,name,date,isLiked = false,changeLike
}) => {
    
    const getRandomNumbers = (min, max) => {
        min = Math.ceil(1)
        max = Math.floor(100)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const [likes,setLikes] = useState(getRandomNumbers())
    return (
        <>
            <div className="guid-art-first guid-art-third guid-art-second">
                <div className="guid-art-block">
                    <div className="guid-art-content">
                        <div className="image-zoom">
                       
                        <button className="like-btn" onClick={() => changeLike(id)}  >
                            {isLiked ? <FavoriteIcon onClick={() =>setLikes(likes-1)}/> : <FavoriteBorderIcon onClick={() =>setLikes(likes+1)}/>}
                            {likes}
                        </button>
                            <img src={image} alt="" />
                            <button className="title-categ-guides">
                            <Link to="/guides"  >
                                     {categories}
                                </Link>
                            </button>
                            <h2>{description}</h2>
                        </div>
                        <div className="guid-art-author">
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



// const mapStateToProps = (state, { id }) => ({
//     isLiked: state[id],
// })

// const mapDispatchToProps = (dispatch) => ({
//     addLike: (id) => dispatch({ type: 'LIKE', id }),
//     removeLike: (id) => dispatch({ type: 'DISLIKE', id }),
// })


export default GuidesContent
