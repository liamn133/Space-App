import React from 'react'
import './Landing.css'
import {Link} from 'react-router-dom';

const Landing = () =>{
return(
    
        <div class = "container">
            <video autoPlay muted loop>
            <source src = "/images/landingVideo.mp4" type = "video/mp4"/>
            </video>
        <div class = "headerContent">
            <h2 id = "headerTitle">Start your solar system journey</h2>
            <Link to = "/">
            <button id= "headerButtonExplore">Explore</button>
            </Link>
            <Link to = "/about">
            <button id="headerButtonAbout">About</button>
            </Link>
        </div>

    </div>
)
}

export default Landing;