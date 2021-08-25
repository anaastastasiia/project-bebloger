import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import '../reset.css'
const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
        </>
    )
}

export default App
