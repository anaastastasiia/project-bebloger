import React from 'react'
import './PlacesPageContent.css'
import PlacesPageArticle from './PlacesPageArticle'
import PlacesArticleArray from './PlacesArticleArray'
import Footer from '../../container/Footer/Footer'

const PlacesPageContent = () => {
    return (
        <>
            <div className="pl-page">
                <div className="big-title-pl">
                    <h1>Places</h1>
                </div>
                <div className="pl-art-page">
                    {PlacesArticleArray.map((places) => (
                        <PlacesPageArticle
                            key={places.id}
                            image={places.image}
                            categories={places.categories}
                            description={places.description}
                            text={places.text}
                            photo={places.photo}
                            name={places.name}
                            date={places.date}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PlacesPageContent
