import React from 'react'
import GuidesArray from './GuidesArray'
import GuidesContent from './GuidesContent'
import './Guides.css'

const Guides = () => {
    return (
        <>
            <div className="guides-block">
                <div className="row row-guides">
                    <div className="blocks-title">
                        <div className="small-title-guides">
                            <img
                                src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-icon-location.png"
                                alt=""
                            />
                            <a href="">Guides</a>
                        </div>
                        <div className="big-title-guides">
                            <h3>
                                Lorem ipsum dolor sit amet tetur adipis icing
                                elit
                            </h3>
                        </div>
                    </div>
                    <div className="guides-articles">
                        {GuidesArray.map((post) => (
                            <GuidesContent
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
export default Guides
