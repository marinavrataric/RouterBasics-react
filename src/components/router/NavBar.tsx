import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Links from './Links'
import Routes from './Routes'

function NavBar() {
    return (
        <Router>
            <Links />
            <Routes />
        </Router>
    )
}

export default NavBar