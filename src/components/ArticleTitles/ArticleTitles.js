import React from 'react'
import ArticleTitlesArray from './ArticleTitlesArray'
import ArticleTitlesItem from './ArticleTitlesItem'
import './Titles.css'

const ArticleTitles = () => {
    return (
        <>
            <div className="adventures-block places-block guides-block">
                <div className="row row-adventures row-places row-guides">
                    {ArticleTitlesArray.map((title) => (
                        <ArticleTitlesItem
                            image={title.image}
                            name={title.name}
                            description={title.description}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ArticleTitles
