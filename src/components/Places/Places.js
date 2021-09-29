import React from 'react'
import PostsArray from './PlacesArray'
import PostsContent from './PlacesContent'
import './Places.css'

const Posts = ({changeLike,likeButtonState}) => {
    return (
        <>
            <div className="places-block">
                <div className="row row-places">
                    <div className="blocks-title">
                        <div className="small-title-places">
                            <img
                                src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-icon-location.png"
                                alt=""
                            />
                            <button>Places</button>
                        </div>
                        <div className="big-title-places">
                            <h3>
                                Lorem ipsum dolor sit amet tetur adipis icing
                                elit
                            </h3>
                        </div>
                    </div>
                    <div className="places-articles">
                        {PostsArray.map(({id,image,categories,description,photo,name,date}) => (
                            <PostsContent
                                key={id}
                                id={id}
                                image={image}
                                categories={categories}
                                description={description}
                                photo={photo}
                                name={name}
                                date={date}
                                changeLike={changeLike}
                                isLiked={likeButtonState[id]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Posts
