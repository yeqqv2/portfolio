import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../../animations'

export const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>minimalism, </span>
                <span>design, </span>
                <span>vibe.</span>
            </div>
        </div>
    )
}
