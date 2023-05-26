import React from 'react'
import './projects.css'
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import card4 from "./images/card4.png";
import card5 from "./images/card5.png";

export const Projects = () => {
    return (
        <div className="projects" id='projects'>
            <div className="projects-container">
                <h1 className='mainTitle' style={{ right: '10%' }}>#projects</h1>
                <div class="card-grid">
                    <a class="card" href="https://github.com/yeqqv2/react-native-fliv" >
                        <div class="card__background" style={{ backgroundImage: `url(${card1})` }}></div>
                        <div class="card__content">
                            <p class="card__category">React Native</p>
                            <h3 class="card__heading">Social Media App</h3>
                        </div>
                    </a>
                    <a class="card" href="https://github.com/yeqqv2/chat-app-firebase-vue" >
                        <div class="card__background" style={{ backgroundImage: `url(${card2})` }}></div>
                        <div class="card__content">
                            <p class="card__category">Vue.js</p>
                            <h3 class="card__heading">Online Chat App</h3>
                        </div>
                    </a>
                    <a class="card" href="https://github.com/yeqqv2/blog-vue" >
                        <div class="card__background" style={{ backgroundImage: `url(${card3})` }}></div>
                        <div class="card__content">
                            <p class="card__category">Vue.js</p>
                            <h3 class="card__heading">Blog App</h3>
                        </div>
                    </a>
                    <a class="card" href="https://github.com/yeqqv2/social-media-react-project">
                        <div class="card__background" style={{ backgroundImage: `url(${card4})` }}></div>
                        <div class="card__content">
                            <p class="card__category">React.js</p>
                            <h3 class="card__heading">Social Media App Design</h3>
                        </div>
                    </a>
                    <a class="card" href="https://github.com/yeqqv2/todo-app-vue">
                        <div class="card__background" style={{ backgroundImage: `url(${card5})` }}></div>
                        <div class="card__content">
                            <p class="card__category">Vue.js</p>
                            <h3 class="card__heading">Todo App</h3>
                        </div>
                    </a>
                </div>
            </div >
        </div >
    )
}
