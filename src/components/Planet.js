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
                <h3>Date discovered: {dateDiscovered}</h3>
                <h3>Mass: {mass}*10^{massExp} kg</h3>
                <h3>Number of moons: {moons}</h3>
                <h3>Diameter: {radius*2}km </h3>
                <h3>Gravity: {gravity}g</h3>
                <h3>Description: <p>{description.description}</p></h3>
            </div>
        </div>
    )
}

export default Planet;