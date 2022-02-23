import React from 'react'
import './MenuStyles.css'
import '../../reset.css'
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <>
            <div className="main-menu">
                <div className="menu">
                    <button className="menu-link">
                        <Link to="/" className="link">
                            Home
                        </Link>
                    </button>
                    <button className="menu-link">
                        <Link to="/about" className="link">
                            About
                        </Link>
                    </button>
                    <button className="menu-link">
                        <Link to="/adventures" className="link">
                            Adventures
                        </Link>
                    </button>
                    <button className="menu-link">
                        <Link to="/places" className="link">
                            Places
                        </Link>
                    </button>
                    <button className="menu-link">
                        <Link to="/guides" className="link">
                            Guides
                        </Link>
                    </button>
                    <button className="menu-link">
                        <Link to="/joinus" className="link">
                            Join us
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Menu
