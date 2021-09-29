import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import App from './container/App'
import articlesLikeReducer from './redux/articlesLikeReducer'
// import rootReducer from './redux/rootReducer'

const store = createStore(articlesLikeReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
)
