import React, {useState} from 'react'
import './Planet.css'



const Planet = ({ name, dateDiscovered, imgUrl, mass, massExp, moons, radius, gravity, planetDescriptions}) => {


const description = (planetDescriptions.filter(planet => planet.name === name))[0]
console.log(description.description)

    return (
        <div className="planetContainer">
            <div className="planetBrief">
                <h1 className = "planetBriefHeading">{name}</h1>
                <img className = "planetBriefImg" src={imgUrl} />
            </div>
            <div className="planetData">
                <p>
                <h3>Date discovered</h3>: {dateDiscovered}
                </p>
                <p>
                <h3>Mass</h3>: {mass}*10^{massExp} kg
                </p>
                <p>
                <h3>Number of moons</h3>: {moons}
                </p>
                <p>
                <h3>Diameter</h3>: {radius*2}km 
                </p>
                <p>
                <h3>Gravity</h3>: {gravity}g
                </p>
                <p>
                <h3>Description</h3>: {description.description}
                </p>
            </div>
        </div>
    )
}

export default Planet;