import React from 'react'
import { Link } from 'react-router-dom'

function HeaderComponent() {
    return (
        <header>
            <Link to="/home"><h3 className="header-title">Movies Collection</h3></Link>
            <Link to="/favourite"><h3 className="header-title">favourite</h3></Link>
        </header>
    )
}

export default HeaderComponent;
