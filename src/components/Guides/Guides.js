import React from 'react'
import GuidesArray from './GuidesArray'
import GuidesContent from './GuidesContent'
import './Guides.css'

const Guides = ({changeLike,likeButtonState}) => {
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
                            <button>Guides</button>
                        </div>
                        <div className="big-title-guides">
                            <h3>
                                Lorem ipsum dolor sit amet tetur adipis icing
                                elit
                            </h3>
                        </div>
                    </div>
                    <div className="guides-articles">
                        {GuidesArray.map(({id,image,categories,description,photo,name,date}) => (
                            <GuidesContent
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
export default Guides
