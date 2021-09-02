import React from 'react'
import './PlacesContent.css'

const PostsContent = (props) => {
    return (
        <>
            <div className="pl-art-first pl-art-second">
                <div className="pl-art-block">
                    <div className="pl-art-content">
                        <div className="image-zoom">
                            <img src={props.image} />

                            <a className="title-categ-pleces" href="">
                                {props.categories}
                            </a>
                            <h2>{props.description}</h2>
                        </div>
                        <div className="pl-art-author">
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
export default PostsContent
