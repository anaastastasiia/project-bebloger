import React from 'react'
import './AdventurePageContent.css'
import AdventurePageArticle from './AdventurePageArticle'
import AdventureArticleArray from './AdventureArticleArray'
import Footer from '../../container/Footer/Footer'

const AdventurePageContent = () => {
    return (
        <>
            <div className="adv-page">
                <div className="big-title-adv">
                    <h1>Adventures</h1>
                </div>
                <div className="adv-art-page">
                    {AdventureArticleArray.map((adventure) => (
                        <AdventurePageArticle
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
            </div>
            <Footer />
        </>
    )
}

export default AdventurePageContent
