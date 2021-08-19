import React from 'react'
import Button from '@material-ui/core/Button'
import './MenuStyles'

const Menu = () => {
    return (
        <>
            <div className="menu">
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Advetures</Button>
                <Button color="inherit">Places</Button>
                <Button color="inherit">Guides</Button>
                <Button color="inherit">Join us</Button>
            </div>
        </>
    )
}

export default Menu
