import React from 'react'
import './GuidesContent.css'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
// import { connect } from 'react-redux'
// import changeLike from '../../container/App/'
const GuidesContent = ({id,image,categories,description,photo,name,date,isLiked = false,changeLike
}) => {
    // const [likes,setLikes] = useState(0)
    // console.log (likes)
    // console.log(isLiked)
    return (
        <>
            <div className="guid-art-first guid-art-third guid-art-second">
                <div className="guid-art-block">
                    <div className="guid-art-content">
                        <div className="image-zoom">
                       
                        <button className="like-btn" onClick={() => changeLike(id) } >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        
                    </button>

                            <img src={image} alt="" />
                            <button className="title-categ-guides">
                                {categories}
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
