import React from 'react'
import './footer.css'
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer-container">
            <div className="social-media">
                <a href="https://github.com/yeqqv2" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://twitter.com/1yunusewre" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com/1yunusewre/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
            </div>
            <div className='footer'>
                {`Copyright © Upbeat Code ${year}`}
            </div>
        </div>
    )
}
