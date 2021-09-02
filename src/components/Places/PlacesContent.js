import React from 'react'
import './PlacesContent.css'

const PostsContent = (props) => {
    return (
        <>
            <div className="pl-art-first pl-art-second">
                <img src={props.image} />
                <div className="pl-art-block">
                    <div className="pl-art-content">
                        <a className="title-categ-pleces" href="">
                            {props.categories}
                        </a>
                        <h2>{props.description}</h2>
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
