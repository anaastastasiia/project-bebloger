import React from 'react'
import AdventuresArray from './AdventuresArray'
import AdventuresArticle from './AdventuresArticle'
import './AdvStyles.css'

const Adventures = ({changeLike,likeButtonState}) => {
    return (
        <>
            <div className="adventures-articles">
                {AdventuresArray.map(({id,image,categories,description,text,photo,name,date}) => (
                    <AdventuresArticle
                    key={id}
                        id={id}
                        image={image}
                        categories={categories}
                        description={description}
                        text={text}
                        photo={photo}
                        name={name}
                        date={date}
                        changeLike={changeLike}
                        isLiked={likeButtonState[id]}
                    />
                ))}
            </div>
        </>
    )
}
export default Adventures
