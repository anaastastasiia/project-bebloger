import React from 'react'
import './PlacesContent.css'

const PostsContent = (props) => {
    return (
        <>
            <div className="pl-art-first pl-art-second">
                <div className="pl-art-block">
                    <div className="pl-art-content">
                        <div className="image-zoom">
                            <img src={props.image} alt="" />

                            <button className="title-categ-pleces">
                                {props.categories}
                            </button>
                            <h2>{props.description}</h2>
                        </div>
                        <div className="pl-art-author">
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
export default PostsContent
