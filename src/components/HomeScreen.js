import React from 'react'
import Block from './Block'
import Planet from './Planet'
import Fact from './Fact'
import './HomeScreen.css';

const HomeScreen = ({ planets, images, onImageClick, showChild, matchingPlanet, planetDescriptions, setShow }) => {

  const home =

    <div className="homeDiv">




      <section className='blocks'>
        <div id="headingContainer">
          <h1>Planets of Our Solar System</h1>
        </div>
        <div id="test">
          {planets.map((planet, index) =>
            (<Block
              key={planet.id}
              name={planet.englishName}
              dateDiscovered={planet.discoveryDate != '' ? planet.discoveryDate : 'N/A'}
              image={images[index]}
              onImageClick={onImageClick}
            />))}
        </div>
      </section>

      {/* <Fact/> */}

      <section id="spaceCraft">
        <h1>Earth's spacecraft</h1>

        <div id="div1">
          <h3>Voyager 1</h3>
    Launched by NASA on the 5th September 1977, Voyager 1 has spent over 43 years in Space, and has travelled over
    25 billion km from Earth, with the probe now in interstellar space.
    </div>

        <img id="img1" src="/images/voyager1.jpg" />

        <img id="img2" src="/images/curiosity.png" />

        <div id="div2">
          <h3>Curiosity</h3>
    Landing on Mars in 2012, the Curiosity rover was tasked with discovering whether the conidition on Mars were ever
    conducive with life existing on the planet. The curiosity rover cost a massive $2.5 billion USD to construct and launch.
    </div>


        <img id="img3" src="/images/cassini.png" />
        <div id="div3">
          <h3>Cassini</h3>
    Sent into space in 1997, to expolre Saturn and the many diverse satellites orbiting the gas giant, as well as the 
    rings surrounding the planet.
    </div>
        
        <div id = "div4">
        <h3>New Horizons</h3>
        The New Horizons probe was launced in 2006. Its primary role was to explore Pluto and the system of surrounding it. New Horizons has enough
        power to last until 2030, so it can continue to make discoveries for a while yet.
        </div>
       
        <img id="img4" src="/images/newHorizons.png" />
        
      </section>







    </div>;

  const planetScreen = <div className="homeDiv">

    <input className="backButton" type="image" onClick={() => setShow()} src='/images/backImg.png'></input>
    <Planet

      name={matchingPlanet.englishName}
      dateDiscovered={matchingPlanet.discoveryDate != '' ? matchingPlanet.discoveryDate : 'N/A'}
      imgUrl={`/images/${matchingPlanet.englishName}.png`}
      mass={matchingPlanet.mass && matchingPlanet.mass.massValue}
      massExp={matchingPlanet.mass && matchingPlanet.mass.massExponent}
      moons={matchingPlanet.moons != null ? matchingPlanet.moons.length : 0}
      radius={matchingPlanet.meanRadius}
      gravity={matchingPlanet.gravity}
      planetDescriptions={planetDescriptions}
    />
  </div>;

  return (
    showChild ? home : planetScreen
  )

}

export default HomeScreen;