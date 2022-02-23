import React from 'react'
import Menu from '../../components/Menu/Menu'
import '../../reset.css'
import './HeaderLogo.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row row-menu">
                        <div className="col-md-4 col-xs-6">
                            <div
                                className="logo"
                            >
                                <img
                                    className="logo-img"
                                    src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger3-logo-retina.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-6">
                            <div className="main-menu">
                                <ul className="menu">
                                    <Menu />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
