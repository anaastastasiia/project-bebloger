import React from 'react'
import './MenuStyles.css'
import '../../reset.css'

const Menu = () => {
    return (
        <>
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
        </>
    )
}

export default Menu
