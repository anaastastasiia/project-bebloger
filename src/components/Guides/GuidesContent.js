import React, { useState } from 'react'
import './GuidesContent.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'


const GuidesContent = (props) => {
    const [likes,setLikes] = useState(0)
    // console.log (likes)
    
    return (
        <>
            <div className="guid-art-first guid-art-third guid-art-second">
                <div className="guid-art-block">
                    <div className="guid-art-content">
                        <div className="image-zoom">
                        <FavoriteBorderIcon className="like-btn" onClick={()=>setLikes(likes+1)}/>
                         
                            <img src={props.image} alt="" />
                            <button className="title-categ-guides">
                                {props.categories}
                            </button>
                            <h2>{props.description}</h2>
                        </div>
                        <div className="guid-art-author">
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
export default GuidesContent
