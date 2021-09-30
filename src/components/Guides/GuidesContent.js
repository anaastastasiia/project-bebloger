import React from 'react'
import './GuidesContent.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { Link } from 'react-router-dom'

const GuidesContent = ({id,image,categories,description,photo,name,date,isLiked = false,changeLike
}) => {
    // const [likes,setLikes] = useState(0)
    
    return (
        <>
            <div className="guid-art-first guid-art-third guid-art-second">
                <div className="guid-art-block">
                    <div className="guid-art-content">
                        <div className="image-zoom">
                       
                        <button className="like-btn" onClick={() => changeLike(id)} >
                        {/* onClick={setLikes(likes+1)} */}
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        {/* {<FavoriteBorderIcon/> ? setLikes(likes+1) : setLikes(likes-1) } */}
                        {/* {likes} */}
                        
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
