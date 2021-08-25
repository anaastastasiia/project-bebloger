import React from 'react'
import Button from '@material-ui/core/Button'
import './MenuStyles.css'
import '../../reset.css'

const Menu = () => {
    return (
        <>
            <div class="container">
                <div class="row row-menu">
                    <div className="col-md-8">
                        <div className="main-menu">
                            <ul className="menu">
                                <li>
                                    <a href=""> Home</a>
                                </li>
                                <li>
                                    <a href=""> About</a>
                                </li>
                                <li>
                                    <a href=""> Adventures</a>
                                </li>
                                <li>
                                    <a href=""> Places</a>
                                </li>
                                <li>
                                    <a href=""> Guides</a>
                                </li>
                                <li>
                                    <a href=""> Join us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
