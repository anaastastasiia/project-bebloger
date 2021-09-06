import React from 'react'
import FirstBlock from '../../components/firstBlock/firstBlock'
import { Route } from 'react-router-dom'
import AboutPage from '../../pages/About/AboutPage'
import Articles from '../Articles/Articles'
import Footer from '../Footer/Footer'
import AdventuresPage from '../../pages/Adventure/AdventuresPage'
import PlacesPage from '../../pages/Places/PlacesPage'
import GuidesPage from '../../pages/Guides/GuidesPage'
import LikesPage from '../../pages/Likes/LikesPage'

const Main = () => {
    return (
        <>
            <Route path="/" exact render={() => <FirstBlock />} />
            <Route path="/" exact render={() => <Articles />} />
            <Route path="/" exact render={() => <Footer />} />
            <Route path="/about" component={AboutPage} />
            <Route path="/adventures" component={AdventuresPage} />
            <Route path="/places" component={PlacesPage} />
            <Route path="/guides" component={GuidesPage} />
            <Route path="/likes" component={LikesPage} />
        </>
    )
}

export default Main
