import React from 'react'
import PostsArray from './PlacesArray'
import PostsContent from './PlacesContent'
import './Places.css'

const Posts = () => {
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
                            <a href="">Places</a>
                        </div>
                        <div className="big-title-places">
                            <h3>
                                Lorem ipsum dolor sit amet tetur adipis icing
                                elit
                            </h3>
                        </div>
                    </div>
                    <div className="places-articles">
                        {PostsArray.map((post) => (
                            <PostsContent
                                key={post.id}
                                image={post.image}
                                categories={post.categories}
                                description={post.description}
                                photo={post.photo}
                                name={post.name}
                                date={post.date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Posts
