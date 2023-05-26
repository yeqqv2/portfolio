import React from 'react'
import './navbar.css'
import { FaHome } from 'react-icons/fa'

export const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <div className='navbar'>
                <div className="right">
                    <a href="home">yunusemre</a>
                    <FaHome id='icon' />
                </div>
                <div className="left">
                    <a href="home">Home</a>
                    <a href="about">About</a>
                    <a href="projects">Projects</a>
                    <a href="contact">Contact</a>
                </div>
            </div>
        </div>
    )
}
