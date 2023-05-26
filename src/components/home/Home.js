import React from 'react'
import './home.css'

export const Home = () => {
    return (
        <div className="home" id='home'>
            <div className="home-container">
                <div className="home-links">
                    <a id="hometext" href='home'>
                        home
                    </a>
                    <a id="aboutmetext" href='about'>
                        aboutme
                    </a>
                    <a id="projectstext" href='projects'>
                        projects
                    </a>
                    <a id="contacttext" href='contact'>
                        contact
                    </a>
                </div>
                <div className="home-context">
                    <div className="home-paragraph">
                        <h1>Merhaba. Ben Yunus Emre Korkmaz.</h1>
                        <p>Javascript, React, CSS alanlarında çalışan bir software geliştiricisiyim. Çeşitli sertifika programlarını tamamlayarak front end branşında uzmanlaştım. Benim tarzım daha çok minimal ve net tasarımlar. Her zaman kendimi geliştirmeye çalışmaktan da keyif alırım.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
