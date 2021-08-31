import React from 'react'
import AdventuresArray from './AdventuresArray'
import AdventuresArticle from './AdventuresArticle'
import './AdvStyles.css'

const Adventures = () => {
    return (
        <>
            <div className="adventures-articles">
                {AdventuresArray.map((adventure) => (
                    <AdventuresArticle
                        key={adventure.id}
                        image={adventure.image}
                        categories={adventure.categories}
                        description={adventure.description}
                        text={adventure.text}
                        photo={adventure.photo}
                        name={adventure.name}
                        date={adventure.date}
                    />
                ))}
            </div>
        </>
    )
}
export default Adventures
