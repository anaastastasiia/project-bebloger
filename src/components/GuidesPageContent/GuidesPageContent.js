import React from 'react'
import './GuidesPageContent.css'
import GuidesPageArticle from './GuidesPageArticle'
import GuidesArticleArray from './GuidesArticleArray'
import Footer from '../../container/Footer/Footer'

const GuidesPageContent = () => {
    return (
        <>
            <div className="guid-page">
                <div className="big-title-guid">
                    <h1>Guides</h1>
                </div>
                <div className="guid-art-page">
                    {GuidesArticleArray.map((guides) => (
                        <GuidesPageArticle
                            key={guides.id}
                            image={guides.image}
                            categories={guides.categories}
                            description={guides.description}
                            text={guides.text}
                            photo={guides.photo}
                            name={guides.name}
                            date={guides.date}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default GuidesPageContent
