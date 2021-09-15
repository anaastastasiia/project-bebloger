import React from 'react'
import './MenuStyles.css'
import '../../reset.css'
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <>
            <div className="main-menu">
                <div className="menu">
                    <button>
                        <Link to="/" className="link">
                            Home
                        </Link>
                    </button>
                    <button>
                        <Link to="/about" className="link">
                            About
                        </Link>
                    </button>
                    <button>
                        <Link to="/adventures" className="link">
                            Adventures
                        </Link>
                    </button>
                    <button>
                        <Link to="/places" className="link">
                            Places
                        </Link>
                    </button>
                    <button>
                        <Link to="/guides" className="link">
                            Guides
                        </Link>
                    </button>
                    <button>
                        <Link to="/likes" className="link">
                            Likes
                        </Link>
                    </button>
                    <button>
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
