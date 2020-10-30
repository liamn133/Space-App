import { findByLabelText } from '@testing-library/react';
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className = "navContainer">
            <a>Planets</a>
            <a>Spacecraft</a>
            <a>The Universe</a>
        </div>
    )
}

export default Navbar;