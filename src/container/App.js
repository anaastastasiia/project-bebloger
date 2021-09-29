import React,{useState} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import '../reset.css'
import '../mainCSS.css'

const App = () => {
    const [likeButtonState,setLikeButtonState]=useState({
        1:false,
        2:false,
        3:false
    })
    const changeLike= (id) =>{
        setLikeButtonState((prevState)=>({
            ...prevState,
            [id] : !prevState[id],
        }))
    }
    return (
        <>
            <CssBaseline />
            <Header />
            <Main 
            changeLike={changeLike} likeButtonState={likeButtonState}/>
        </>
    )
}

export default App
