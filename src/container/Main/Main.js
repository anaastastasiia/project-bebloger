import React from 'react'
import FirstBlock from '../../components/firstBlock/firstBlock'
import { Route } from 'react-router-dom'
import AboutPage from '../../pages/About/AboutPage'
import Articles from '../Articles/Articles'
import Footer from '../Footer/Footer'
import AdventuresPage from '../../pages/Adventure/AdventuresPage'
import PlacesPage from '../../pages/Places/PlacesPage'
import GuidesPage from '../../pages/Guides/GuidesPage'
import JoinUs from '../../pages/JoinUs/JoinUs'

const Main = ({changeLike, likeButtonState,}) => {
    return (
        <>
            <Route path="/" exact render={() => <FirstBlock />} />
            <Route path="/" exact render={() => (
            <Articles
             changeLike={changeLike} likeButtonState={likeButtonState} />)} />
            <Route path="/" exact render={() => <Footer />} />
            <Route path="/about" component={AboutPage} />
            <Route path="/adventures" component={AdventuresPage}  />
            <Route path="/places" component={PlacesPage}  />
            <Route path="/guides" component={GuidesPage}  />
            <Route path="/joinus" component={JoinUs} />
        </>
    )
}

export default Main
